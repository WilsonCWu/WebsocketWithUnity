using System;
using UnityEngine;
using WebSocketSharp;

public class DaydreamServer : MonoBehaviour {

	// Use this for initialization
	void Start () {
        WebSocket ws = new WebSocket("ws://localhost:5555");
        ws.OnMessage += (sender, e) =>
        {
            Debug.Log("Server says: " + e.Data);
        };
        ws.ConnectAsync();
        /*
        using (var ws = new WebSocket("ws://localhost:5555"))
        {
            ws.Connect();
            ws.OnMessage += (sender,e) =>
            {
                Debug.Log("Server says: " + e.Data);
            };
            ws.Send("nuggets");
        }
        */
    }
}
