using System;
using UnityEngine;
using DG.Tweening;

public class AttackCharacter : Character
{
    public override void BehaveOnUserInput()
    {
        var enemy = GridController.instance.GetAdjacentEnemy(gridPosition, CharacterModel.CHARACTER_TYPE.DEFENSE);
        if (enemy != null)
        {
            Attack(enemy);
        }
        else
        {
            enemy = GameController.instance.FindClosestEnemyToMove(transform.position);
            if (enemy != null)
            {
                // this.Log(enemy);
                var targetCell = GridController.instance.GetAdjacentPosition(enemy.gridPosition);
                if (targetCell != null)
                {
                    GridController.instance.RemoveCharacterFromCell(gridPosition);
                    targetCell.character = this;
                    this.gridPosition = targetCell.gridPosition;
                    this.name = "character[" + gridPosition.x + "." + gridPosition.y + "]";
                    MoveTo(targetCell);
                }
            }
            else
            {
                canClick = true;
                // StayIdle();
            }
        }
    }

    private void MoveTo(CellController targetCell)
    {
        transform.DOMove(targetCell.transform.position, 1.5f).OnComplete(() =>
        {
            canClick = true;
            // targetCell.character = this;
            // this.gridPosition = targetCell.gridPosition;
            // this.name = "character[" + gridPosition.x + "." + gridPosition.y + "]";
        });
    }

    private void Attack(Character enemy)
    {
        this.Log("attacking");
        Destroy(enemy.gameObject);
    }
}