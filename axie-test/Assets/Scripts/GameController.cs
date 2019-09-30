using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GameController : CustomSingleton<GameController>
{
    [SerializeField] Transform charactersContainer;
    [SerializeField] Character defenseCharacterPrefab, attackCharacterPrefab;
    List<Character> defenseList, attackList;

    public override void Awake()
    {
        defenseList = new List<Character>();
        attackList = new List<Character>();

        this.RegisterListener(EventID.ON_GRID_HAS_INIT, param => OnGridHasInit());
        base.Awake();
    }

    public Character FindClosestEnemyToMove(Vector3 position)
    {
        var availableCharacters = new List<Character>();
        for (int i = 0; i < defenseList.Count; i++)
        {
            var ele = defenseList[i];
            var adjacentCells = GridController.instance.GetAdjacentCells(ele.gridPosition);
            for (int j = 0; j < adjacentCells.Count; j++)
            {
                if (adjacentCells[j].character == null)
                {
                    availableCharacters.Add(ele);
                    break;
                }
            }
        }

        var min = float.MaxValue;
        var result = default(Character);
        for (int i = 0; i < availableCharacters.Count; i++)
        {
            var ele = availableCharacters[i];
            var distance = Vector2.Distance(position, ele.transform.position);
            if (distance < min)
            {
                // Destroy(ele);
                min = distance;
                result = ele;
            }
        }
        return result;
    }

    private void OnGridHasInit()
    {
        defenseList = SpawnCharacter(defenseCharacterPrefab, 1);
        // SpawnCharacter(attackCharacterPrefab, 1);
        // SpawnCharacter(attackCharacterPrefab, 2);
        attackList = SpawnCharacter(attackCharacterPrefab, 3);
    }

    private void Start()
    {
    }

    List<Character> SpawnCharacter(Character prefab, int circleIndex)
    {
        var result = new List<Character>();

        List<CellController> cells = GridController.instance.GetPointByCircleIndex(circleIndex);
        if (cells != null && cells.Count > 0)
        {

            for (int i = 0; i < cells.Count; i++)
            {
                var ele = cells[i];
                var character = Instantiate(prefab, charactersContainer);
                character.transform.position = ele.transform.position;
                character.gridPosition = ele.gridPosition;
                character.name += "[" + ele.gridPosition.x + "." + ele.gridPosition.y + "]";
                ele.character = character;
                result.Add(character);
            }
        }
        else
        {
            this.Log("positions list error");
            return null;
        }
        return result;
    }


}
