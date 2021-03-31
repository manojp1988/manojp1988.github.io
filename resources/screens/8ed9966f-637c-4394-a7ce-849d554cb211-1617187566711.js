jQuery("#simulation")
  .on("click", ".s-8ed9966f-637c-4394-a7ce-849d554cb211 .click", function(event, data) {
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
                      "datamaster": "Customer Master"
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
                        "datamaster": "Customer Master",
                        "element": "#s-Data_grid_1",
                        "value": {
                          "action": "jimAnd",
                          "parameter": [ {
                            "action": "jimAnd",
                            "parameter": [ {
                              "action": "jimContains",
                              "parameter": [ {
                                "field": "efa30c4c-e9f9-452b-8437-f8638f88d234"
                              },{
                                "datatype": "property",
                                "target": "#s-Input_4",
                                "property": "jimGetValue"
                              } ]
                            },{
                              "action": "jimContains",
                              "parameter": [ {
                                "field": "80db8176-4893-49c2-bec1-bbaf931318ed"
                              },{
                                "datatype": "property",
                                "target": "#s-Input_5",
                                "property": "jimGetValue"
                              } ]
                            } ]
                          },{
                            "action": "jimContains",
                            "parameter": [ {
                              "field": "1bbe397b-ab6f-41ed-8b5f-bbff382822d9"
                            },{
                              "datatype": "property",
                              "target": "#s-Input_6",
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
                    "datamaster": "Customer Master",
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