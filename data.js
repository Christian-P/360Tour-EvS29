var APP_DATA = {
  "scenes": [
    {
      "id": "0-flur1",
      "name": "Corridor 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.9284541127301793,
        "pitch": 0.06083890252109825,
        "fov": 1.4052438907041185
      },
      "linkHotspots": [
        {
          "yaw": 0.9284541127301793,
          "pitch": 0.06083890252109825,
          "rotation": 0,
          "target": "1-flur2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-flur2",
      "name": "Corridor 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.054473633810680155,
          "pitch": 0.14627411443638927,
          "rotation": 3.141592653589793,
          "target": "3-flur3"
        },
        {
          "yaw": 0.9253365388226129,
          "pitch": 0.1012448006083364,
          "rotation": 1.5707963267948966,
          "target": "2-s"
        },
        {
          "yaw": -3.001904488558626,
          "pitch": 0.10984567782036514,
          "rotation": 3.141592653589793,
          "target": "0-flur1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-s",
      "name": "Room 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.8743042611516962,
          "pitch": 0.14286681584869854,
          "rotation": 3.141592653589793,
          "target": "1-flur2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-flur3",
      "name": "Corridor 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.667769765067046,
        "pitch": 0.05542071494085832,
        "fov": 1.4052438907041185
      },
      "linkHotspots": [
        {
          "yaw": -1.3654974995650662,
          "pitch": 0.14436891395760298,
          "rotation": 3.141592653589793,
          "target": "6-flur4"
        },
        {
          "yaw": 2.971286789486884,
          "pitch": 0.1294921145816268,
          "rotation": 0.7853981633974483,
          "target": "5-kueche"
        },
        {
          "yaw": 0.3315509914953054,
          "pitch": 0.156994513267815,
          "rotation": 3.141592653589793,
          "target": "1-flur2"
        },
        {
          "yaw": 1.995137146825816,
          "pitch": 0.11371353774217319,
          "rotation": 0,
          "target": "4-l"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-l",
      "name": "Room 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.4719967684015467,
          "pitch": 0.030247161263719846,
          "rotation": 3.141592653589793,
          "target": "3-flur3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-kueche",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.254262337333106,
        "pitch": 0.21944911792370903,
        "fov": 1.4052438907041185
      },
      "linkHotspots": [
        {
          "yaw": -0.4127880237725545,
          "pitch": 0.15194022110269678,
          "rotation": 3.141592653589793,
          "target": "3-flur3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-flur4",
      "name": "Corridor 4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.17121970804260656,
        "pitch": 0.11578985070761405,
        "fov": 1.4052438907041185
      },
      "linkHotspots": [
        {
          "yaw": -0.3371859303206861,
          "pitch": 0.21360018210213738,
          "rotation": 5.497787143782138,
          "target": "8-m"
        },
        {
          "yaw": 0.7133089477947436,
          "pitch": 0.08002080887445828,
          "rotation": 0.7853981633974483,
          "target": "7-bad"
        },
        {
          "yaw": -2.3639909023897907,
          "pitch": 0.18217219690099462,
          "rotation": 3.141592653589793,
          "target": "3-flur3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-bad",
      "name": "Bathroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.800411889347459,
          "pitch": 0.13442513264714862,
          "rotation": 3.141592653589793,
          "target": "6-flur4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-m",
      "name": "Room 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.3689975132998562,
          "pitch": 0.09745868205474295,
          "rotation": 3.141592653589793,
          "target": "6-flur4"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "EvS29",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
