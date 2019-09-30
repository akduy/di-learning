using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Spine.Unity;
using System;

public class Character : MonoBehaviour
{
    public static bool canClick = true;
    public CharacterModel model;
    // public CharacterModel.CHARACTER_TYPE type;
    public Vector2 gridPosition;
    [SerializeField, SpineAnimation] string idle, move, attack, onclick;
    [SerializeField] SkeletonAnimation skeletonAnimation;

    private void Start()
    {
        // type = model.type;
    }

    void OnMouseDown()
    {
        if (canClick)
        {
            skeletonAnimation.AnimationState.SetAnimation(0, onclick, false).Complete += delegate
            {
                StayIdle();
            };
            canClick = false;
            BehaveOnUserInput();
        }
    }

    public virtual void BehaveOnUserInput()
    {
        this.Log("virtual fucntion");
    }

    protected void StayIdle()
    {
        if (true)
        {
            skeletonAnimation.AnimationState.SetAnimation(0, idle, true);
        }
    }
}
