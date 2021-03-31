jQuery("#simulation")
  .on("click", ".s-1742422d-f744-4cb0-9d98-081e807efa97 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Data_grid_1" ],
                    "value": {
                      "datatype": "datamaster",
                      "datamaster": "history"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Data_grid_1" ],
                    "value": {
                      "action": "jimFilterData",
                      "parameter": {
                        "datatype": "datalist",
                        "datamaster": "history",
                        "element": "#s-Data_grid_1",
                        "value": {
                          "action": "jimAnd",
                          "parameter": [ {
                            "action": "jimAnd",
                            "parameter": [ {
                              "action": "jimContains",
                              "parameter": [ {
                                "field": "f1eb7073-2e8a-4005-951c-6c86f2536287"
                              },{
                                "datatype": "property",
                                "target": "#s-Input_3",
                                "property": "jimGetValue"
                              } ]
                            },{
                              "action": "jimContains",
                              "parameter": [ {
                                "field": "b85d4ac1-248a-49b1-9ed1-44a0ccdc05eb"
                              },{
                                "datatype": "property",
                                "target": "#s-Input_4",
                                "property": "jimGetValue"
                              } ]
                            } ]
                          },{
                            "action": "jimContains",
                            "parameter": [ {
                              "field": "c0bf6e91-b1e7-4b5a-86d1-d33a7d7519f4"
                            },{
                              "datatype": "property",
                              "target": "#s-Input_5",
                              "property": "jimGetValue"
                            } ]
                          } ]
                        }
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is(".s-Image_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimDeleteData",
                  "parameter": {
                    "datatype": "datarow",
                    "datamaster": "history",
                    "element": "#s-Data_grid_1"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNextPageData",
                  "parameter": {
                    "target": [ "#s-Data_grid_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimPrevPageData",
                  "parameter": {
                    "target": [ "#s-Data_grid_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimFirstPageData",
                  "parameter": {
                    "target": [ "#s-Data_grid_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimLastPageData",
                  "parameter": {
                    "target": [ "#s-Data_grid_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
    jFirer.parents("tr.datarow").trigger("click", true);
  });