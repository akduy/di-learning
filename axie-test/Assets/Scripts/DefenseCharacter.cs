
using System;

public class DefenseCharacter : Character
{
    public override void BehaveOnUserInput()
    {
        var enemy = GridController.instance.GetAdjacentEnemy(gridPosition, CharacterModel.CHARACTER_TYPE.ATTACK);
        if (enemy != null)
        {
            Attack(enemy);
        }
        else
        {
            StayIdle();
        }
    }

    private void Attack(object enemy)
    {
    }
}