jQuery("#simulation")
  .on("click", ".s-bb7a5a5f-77f2-4ad1-ac25-43ea25150a20 .click", function(event, data) {
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
                      "datamaster": "Statement"
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
                        "datamaster": "Statement",
                        "element": "#s-Data_grid_1",
                        "value": {
                          "action": "jimAnd",
                          "parameter": [ {
                            "action": "jimAnd",
                            "parameter": [ {
                              "action": "jimAnd",
                              "parameter": [ {
                                "action": "jimAnd",
                                "parameter": [ {
                                  "action": "jimAnd",
                                  "parameter": [ {
                                    "action": "jimAnd",
                                    "parameter": [ {
                                      "action": "jimAnd",
                                      "parameter": [ {
                                        "action": "jimEquals",
                                        "parameter": [ {
                                          "field": "0a4465a0-0c7f-4285-bb8e-1134cb7d8f59"
                                        },{
                                          "datatype": "property",
                                          "target": "#s-Input_9",
                                          "property": "jimGetValue"
                                        } ]
                                      },{
                                        "action": "jimContains",
                                        "parameter": [ {
                                          "field": "dfc57c2f-d0fe-4b45-875c-6b40285b4115"
                                        },{
                                          "datatype": "property",
                                          "target": "#s-Input_1",
                                          "property": "jimGetValue"
                                        } ]
                                      } ]
                                    },{
                                      "action": "jimContains",
                                      "parameter": [ {
                                        "field": "9b1e9465-e429-48b4-a078-ea0083df2e62"
                                      },{
                                        "datatype": "property",
                                        "target": "#s-Input_10",
                                        "property": "jimGetValue"
                                      } ]
                                    } ]
                                  },{
                                    "action": "jimContains",
                                    "parameter": [ {
                                      "field": "4fe15253-1333-4063-a343-5272180718be"
                                    },{
                                      "datatype": "property",
                                      "target": "#s-Input_11",
                                      "property": "jimGetValue"
                                    } ]
                                  } ]
                                },{
                                  "action": "jimContains",
                                  "parameter": [ {
                                    "field": "4de6904c-3705-4a01-a82a-7fd26343b875"
                                  },{
                                    "datatype": "property",
                                    "target": "#s-Input_12",
                                    "property": "jimGetValue"
                                  } ]
                                } ]
                              },{
                                "action": "jimContains",
                                "parameter": [ {
                                  "field": "53362248-75a8-4bff-8fa4-26cdce333e75"
                                },{
                                  "datatype": "property",
                                  "target": "#s-Input_13",
                                  "property": "jimGetValue"
                                } ]
                              } ]
                            },{
                              "action": "jimContains",
                              "parameter": [ {
                                "field": "6132e7b1-e538-44e9-9a63-1ff3b7ec80a7"
                              },{
                                "datatype": "property",
                                "target": "#s-Input_14",
                                "property": "jimGetValue"
                              } ]
                            } ]
                          },{
                            "action": "jimContains",
                            "parameter": [ {
                              "field": "c38e8f7e-7c9b-492b-be8d-2c449ee24e16"
                            },{
                              "datatype": "property",
                              "target": "#s-Input_15",
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
    } else if(jFirer.is(".s-Image_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimDeleteData",
                  "parameter": {
                    "datatype": "datarow",
                    "datamaster": "Statement",
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
    } else if(jFirer.is("#s-Paragraph_17")) {
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
    } else if(jFirer.is("#s-Paragraph_18")) {
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
    } else if(jFirer.is("#s-Paragraph_19")) {
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
    } else if(jFirer.is("#s-Paragraph_20")) {
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