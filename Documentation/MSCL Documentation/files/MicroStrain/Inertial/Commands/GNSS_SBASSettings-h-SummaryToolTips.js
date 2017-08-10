NDSummary.OnToolTipsLoaded("File:MicroStrain/Inertial/Commands/GNSS_SBASSettings.h",{351:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype351\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> InertialTypes::Command commandType() <span class=\"SHKeyword\">const</span></div></div>",352:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype352\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual uint8</span> fieldDataByte() <span class=\"SHKeyword\">const</span></div></div>",353:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype353\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> std::<span class=\"SHKeyword\">string</span> commandName() <span class=\"SHKeyword\">const</span></div></div>",354:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype354\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> responseExpected() <span class=\"SHKeyword\">const</span></div></div>",355:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype355\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> SBASSettings MakeSetCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">SBASSettingsData</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div>",356:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype356\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">static</span> SBASSettings MakeGetCommand()</div></div>",357:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype357\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> SBASSettingsData getResponseData(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">GenericInertialCommandResponse&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">response</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div>",358:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype358\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">operator</span> ByteStream() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Converts this class to a ByteStream.</div></div>",359:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype359\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">SBASSettings(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">InertialTypes::</td><td class=\"PType\">FunctionSelector&nbsp;</td><td class=\"PName last\">function_selector,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">SBASSettingsData&nbsp;</td><td class=\"PName last\">dataToUse</td></tr></table></td><td class=\"PAfterParameters\">) : m_functionSelector(function_selector), m_data(dataToUse)</td></tr></table></div></div>",361:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype361\" class=\"NDPrototype NoParameterForm\">SBASSettingsData m_data</div><div class=\"TTSummary\">The ConstellationSettingsData to send to the device.</div></div>",362:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype362\" class=\"NDPrototype NoParameterForm\">InertialTypes::FunctionSelector m_functionSelector</div><div class=\"TTSummary\">The InertialTypes::FunctionSelector type of command to send, get/set, reset to factory defaults, et al.</div></div>"});