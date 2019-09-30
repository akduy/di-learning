using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class DFS : MonoBehaviour
{
    const int max = 6;
    int[,] matrix = {
        {1,1,1,1,1,1},
        {1,1,1,1,1,1},
        {0,0,0,0,0,0},
        {2,2,2,2,2,2},
        {2,2,2,2,2,2},
        {2,2,2,2,2,2},
    };

    int t = 0;
    int v = 6;
    int[] color, times, back;

    private void Start()
    {
        
    }

    void Search()
    {
        color = new int[max];
        // times = new int[max];
        back = new int[max];
        for (int i = 0; i < v; i++)
        {
            color[i] = 0;
            back[i] = -1;
        }

        for (int i = 0; i < v; i++)
        {
            if (color[i] == 0)
            {
                Visit(i);
            }
        }

    }

    private void Visit(int k)
    {
        color[k] = 1;
        // t++;
        // times[k] = t;
        for (int n = 0; n < v; n++)
        {
            if (matrix[k, n] != 0 && color[n] == 0)
            {
                back[n] = k;
                // times[n] = times[k] + 1;
                Visit(n);
            }
        }
        color[k] = 2;
    }
}
