NDSummary.OnToolTipsLoaded("File:MicroStrain/MIP/Commands/MipCommand.h",{1365:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1365\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">MipCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">Command&nbsp;</td><td class=\"PName last\">cmdId,</td></tr><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">FunctionSelector&nbsp;</td><td class=\"PName last\">fn</td></tr></table></td><td class=\"PAfterParameters\">) : m_commandId(cmdId), m_functionSelector(fn)</td></tr></table></div><div class=\"TTSummary\">Constructor to build MIP command based on Command ID and function selector</div></div>",1366:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1366\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">MipCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">Command&nbsp;</td><td class=\"PName last\">cmdId,</td></tr><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">FunctionSelector&nbsp;</td><td class=\"PName last\">fn,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">MipFieldValues&nbsp;</td><td class=\"PName last\">vals</td></tr></table></td><td class=\"PAfterParameters\">) : m_commandId(cmdId), m_functionSelector(fn), m_data(vals)</td></tr></table></div><div class=\"TTSummary\">Constructor to build MIP command based on Command ID and function selector with specified data</div></div>",1367:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1367\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual</span> std::shared_ptr&lt;GenericMipCommand::Response&gt; createResponse(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">weak_ptr&lt;ResponseCollector&gt;&nbsp;</td><td class=\"PName last\">collector</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Converts this class to a ByteStream.</div></div>",1368:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1368\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual operator</span> ByteStream() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Converts this class to a ByteStream.</div></div>",1369:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1369\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">MipFieldValues getGenericResponseData(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">GenericMipCmdResponse&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">response</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div>",1370:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1370\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> std::<span class=\"SHKeyword\">string</span> commandName() <span class=\"SHKeyword\">const</span></div></div>",1371:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1371\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> MipFunctionSelectors supportedFunctionSelectors(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">Command&nbsp;</td><td class=\"PName last\">cmd</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div>",1372:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1372\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static bool</span> supportsFunctionSelector(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">Command&nbsp;</td><td class=\"PName last\">cmd,</td></tr><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">FunctionSelector&nbsp;</td><td class=\"PName last\">fn</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div>",1373:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1373\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> MipTypes::Command commandType() <span class=\"SHKeyword\">const</span></div></div>",1374:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1374\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual uint8</span> fieldDataByte() <span class=\"SHKeyword\">const</span></div></div>",1375:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1375\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> responseExpected() <span class=\"SHKeyword\">const</span></div></div>"});