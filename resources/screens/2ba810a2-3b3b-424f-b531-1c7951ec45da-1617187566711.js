jQuery("#simulation")
  .on("click", ".s-2ba810a2-3b3b-424f-b531-1c7951ec45da .click", function(event, data) {
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
                              "action": "jimAnd",
                              "parameter": [ {
                                "action": "jimAnd",
                                "parameter": [ {
                                  "action": "jimContains",
                                  "parameter": [ {
                                    "field": "efa30c4c-e9f9-452b-8437-f8638f88d234"
                                  },{
                                    "datatype": "property",
                                    "target": "#s-Input_6",
                                    "property": "jimGetValue"
                                  } ]
                                },{
                                  "action": "jimContains",
                                  "parameter": [ {
                                    "field": "80db8176-4893-49c2-bec1-bbaf931318ed"
                                  },{
                                    "datatype": "property",
                                    "target": "#s-Input_7",
                                    "property": "jimGetValue"
                                  } ]
                                } ]
                              },{
                                "action": "jimContains",
                                "parameter": [ {
                                  "field": "1bbe397b-ab6f-41ed-8b5f-bbff382822d9"
                                },{
                                  "datatype": "property",
                                  "target": "#s-Input_8",
                                  "property": "jimGetValue"
                                } ]
                              } ]
                            },{
                              "action": "jimContains",
                              "parameter": [ {
                                "field": "d37d22cb-4864-4e41-a551-1034c88cc680"
                              },{
                                "datatype": "property",
                                "target": "#s-Input_9",
                                "property": "jimGetValue"
                              } ]
                            } ]
                          },{
                            "action": "jimContains",
                            "parameter": [ {
                              "field": "f49c114e-a300-4847-a1ba-2a57b4de782e"
                            },{
                              "datatype": "property",
                              "target": "#s-Input_10",
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
    } else if(jFirer.is("#s-Paragraph_11")) {
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
    } else if(jFirer.is("#s-Paragraph_12")) {
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
    } else if(jFirer.is("#s-Paragraph_13")) {
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
    } else if(jFirer.is("#s-Paragraph_14")) {
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