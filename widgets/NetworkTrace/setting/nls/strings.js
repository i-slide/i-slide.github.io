﻿define({
  root: ({
    taskUrl: "Task URL",
    setTask: "Set",
    setTaskPopupTitle: "Set Task",
    validate: "Set",
    inValidGPService: "Please enter valid geoprocessing service.",
    noOutputParameterWithGeometryType: "The selected geoprocessing service must have at least one output parameter with a specified geometry type. Please select a different geoprocessing service.",
    invalidOutputGeometry: "The output geometry type of the selected geoprocessing service is not compatible with the project settings. The results of the geoprocessing service cannot be stored.",
    GPFeatureRecordSetLayerERR: "Please enter a geoprocessing service with inputs of type 'GPFeatureRecordSetLayer' only.",
    invalidInputParameters: "Number of input parameters is either less than 1 or more than 3. Please enter a valid geoprocessing service.",
    //project setting tab
    projectSetting: {
      title: "Project Settings",
      note: "Note: Project Settings are optional, once configured user can store project in the desired webmap layers with network outage area and input parameters. User can store other output parameters from “Output” group in “Input/Output” tab.",
      projectPolygonLayer: "Project polygon layer",
      outputParameterName: "Output parameter name",
      projectPointLayer: "Project point layer",
      selectLabel: "Select",
      polygonLayerHelp: "<p>Polygon layer(s) with the following conditions will be shown:<br/><ul><li>Layer must have editing capabilities namely Create, Delete and Update</li><li>Layer must have 2 fields with the exact name and data types:</li><ul><li>name (String type field)</li><li>globalid (GlobalID type field)</li></ul></ul><p/>",
      outputParameterHelp: "<p>Output polygon layer(s) from the task URL will be shown<p/>",
      pointLayerHelp: "<p>Point layer(s) with the following conditions will be shown: <br/><ul><li>Layer must have editing capabilities namely Create, Delete and Update</li><li>Layer must have 2 fields with the exact name and data types:</li><ul><li>inputtype (String type field)</li><li>projectid (GUID type field)</li></ul></ul><p/>",
    },
    inputOutputTab: {
      flag: "Flag",
      barrier: "Barrier",
      skip: "Skip",
      title: "Input",
      inputTooltip: "Tooltip",
      typeText: "Type",
      symbol: "Symbol",
      summaryEditorText: "Summary Text",
      summaryTextTitle: "Provide text to display for the input tab"
    },
    // Summary expression builder
    summaryTab: {
      title: "Output",
      summaryFieldsetText: "Summary settings",
      inputOutput: "Input/Output",
      field: "Field",
      operator: "Operator",
      inputOperatorCountOption: "Count",
      outputOperatorCountOption: "Count",
      outputOperatorSkipCountOption: "SkipCount",
      fieldOperatorSumOption: "Sum",
      fieldOperatorMinOption: "Min",
      fieldOperatorMaxOption: "Max",
      fieldOperatorMeanOption: "Mean",
      expressionAddButtonText: "Add",
      expressionVerifyButtonText: "Verify",
      summaryEditorText: "Summary Text",
      zoomText: "Auto zoom after trace",
      summarSettingTooltipText: "Add input/output count",
      symbol: "Symbol",
      outputParametersText: "Output Parameters",
      skipText: "Skippable",
      visibilityText: "Visible",
      exportToCsvText: "Export to CSV",
      settitngstext: "Settings",
      saveToLayerText: "Save to Layer (Optional)",
      inputLabel: "Label",
      inputTooltip: "Tooltip",
      outputDisplay: "Display text",
      addFieldTitle: "Add Field",
      setScale: "Set Scale",
      enterDisplayText: "Enter display text",
      saveToLayerHelp: "<p>Layer with following conditions will be shown:<br/><ul><li>Layer must have editing capabilities namely “Create”, “Delete” and “Update”</li><li>Layer must have two fields with the name and data type:</li><ul><li>parametername (String type field)</li><li>projectid (Guid type field)</li></ul></ul><p/>",
      exportToCsvDisplayText: "CSV",
      summaryTextTitle: "Provide summary text to display on the output tab",
      addSummaryItemsTitle: "Add Summary Items"
    },
    // Validation messages
    validationErrorMessage: {
      webMapError: "No layers available in the webmap. Please select a valid webmap.",
      inputTypeFlagGreaterThanError: "Input of type flag cannot be more than one.",
      inputTypeFlagLessThanError: "At least one input of type flag is required.",
      inputTypeBarrierErr: "Input of type barrier cannot be more than one.",
      inputTypeSkipErr: "Input of type skip cannot be more than one.",
      displayTextForButtonError: "Display text for 'Run' button cannot be blank.",
      UnableToLoadGeoprocessError: "Unable to load geoprocessing service.",
      invalidSummaryExpression: "Invalid expression.",
      validSummaryExpression: "Success !",
      invalidProjectSettings: "Invalid Project Settings.<br/> Please select valid value in '${projectSetting}'."
    },
    // Hint text
    hintText: {
      labelTextHint: "Hint: Provide display label for result panel of output parameter.",
      displayTextHint: "Hint: This will be displayed in the details panel for this output parameter.",
      inputTextHint: "Hint: Build your expression below using the add summary items button.",
      expressionHint: "Hint: Select items and click add to build expression."
    }
  }),
  "ar": 1,
  "bs": 1,
  "ca": 1,
  "cs": 1,
  "da": 1,
  "de": 1,
  "el": 1,
  "es": 1,
  "et": 1,
  "fi": 1,
  "fr": 1,
  "he": 1,
  "hr": 1,
  "hu": 1,
  "it": 1,
  "id": 1,
  "ja": 1,
  "ko": 1,
  "lt": 1,
  "lv": 1,
  "nb": 1,
  "nl": 1,
  "pl": 1,
  "pt-br": 1,
  "pt-pt": 1,
  "ro": 1,
  "ru": 1,
  "sl": 1,
  "sr": 1,
  "sv": 1,
  "th": 1,
  "tr": 1,
  "uk": 1,
  "vi": 1,
  "zh-cn": 1,
  "zh-hk": 1,
  "zh-tw": 1
});
