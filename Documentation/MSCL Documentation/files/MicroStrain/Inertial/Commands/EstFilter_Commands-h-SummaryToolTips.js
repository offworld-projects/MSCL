NDSummary.OnToolTipsLoaded("File:MicroStrain/Inertial/Commands/EstFilter_Commands.h",{481:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype481\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">GetEstFilterDataRateBase</div></div></div><div class=\"TTSummary\">Contains the logic for the &quot;Get Estimation Filter Data Rate Base&quot; command</div></div>",487:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype487\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">static</span> ByteStream buildCommand()</div><div class=\"TTSummary\">Builds the bytes in the command</div></div>",488:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype488\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Response</div></div></div><div class=\"TTSummary\">Handles the response to the command</div></div>",490:"<div class=\"NDToolTip TFunction LC\"><div class=\"TTSummary\">Gets the InertialTypes::Command</div></div>",491:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype491\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual uint8</span> fieldDataByte() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the data field descriptor byte</div></div>",492:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype492\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Response(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">weak_ptr&lt;ResponseCollector&gt;&nbsp;</td><td class=\"PName last\">collector</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates the Response object</div></div>",493:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype493\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">uint16</span> parseResponse(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">GenericInertialCommandResponse&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">response</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Parses the response, getting the data rate base result</div></div>",494:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype494\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">EstFilterMessageFormat</div></div></div><div class=\"TTSummary\">Contains the logic for the &quot;Estimation Filter Message Format&quot; command</div></div>",500:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype500\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">static</span> ByteStream buildCommand_get()</div><div class=\"TTSummary\">Builds the bytes for the &quot;get&quot; command</div></div>",501:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype501\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> ByteStream buildCommand_set(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">InertialChannels&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">channels,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td></td><td class=\"PName last\">sampleRateBase</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Builds the bytes for the &quot;set&quot; command.</div></div>",502:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype502\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">ResetFilter</div></div></div><div class=\"TTSummary\">Contains the logic for the &quot;Reset Filter&quot; command</div></div>",507:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype507\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">static</span> ByteStream buildCommand()</div><div class=\"TTSummary\">Builds the bytes for the command.</div></div>",508:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype508\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">SetInitialAttitude</div></div></div><div class=\"TTSummary\">Contains the logic for the &quot;Set Initial Attitude&quot; command</div></div>",513:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype513\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> ByteStream buildCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">EulerAngles&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">attitude</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Builds the bytes for the command.</div></div>",514:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype514\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">SetInitialHeading</div></div></div><div class=\"TTSummary\">Contains the logic for the &quot;Set Initial Heading&quot; command</div></div>",519:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype519\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> ByteStream buildCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">heading</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Builds the bytes for the command.</div></div>",520:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype520\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">AutoInitializeControl</div></div></div><div class=\"TTSummary\">Contains the logic for the &quot;Auto-Initialization Control&quot; command</div></div>",526:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype526\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">static</span> ByteStream buildCommand_get()</div><div class=\"TTSummary\">Builds the bytes for the &quot;get&quot; command.</div></div>",527:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype527\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> ByteStream buildCommand_set(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">enable</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Builds the bytes for the &quot;set&quot; command.</div></div>",528:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype528\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">SensorToVehicFrameTrans</div></div></div><div class=\"TTSummary\">Contains the logic for the &quot;Sensor to Vehicle Frame Transformation&quot; command</div></div>",534:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype534\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">static</span> ByteStream buildCommand_get()</div><div class=\"TTSummary\">Builds the bytes for the &quot;get&quot; command.</div></div>",535:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype535\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> ByteStream buildCommand_set(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">EulerAngles&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">angles</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Builds the bytes for the &quot;set&quot; command.</div></div>",536:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype536\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">SensorToVehicFrameOffset</div></div></div><div class=\"TTSummary\">Contains the logic for the &quot;Sensor to Vehicle Frame Offset&quot; command</div></div>",542:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype542\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">static</span> ByteStream buildCommand_get()</div><div class=\"TTSummary\">Builds the bytes for the &quot;get&quot; command.</div></div>",543:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype543\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> ByteStream buildCommand_set(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">PositionOffset&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">offset</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Builds the bytes for the &quot;set&quot; command.</div></div>",544:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype544\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">AntennaOffset</div></div></div><div class=\"TTSummary\">Contains the logic for the &quot;Antenna Offset&quot; command</div></div>",550:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype550\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">static</span> ByteStream buildCommand_get()</div><div class=\"TTSummary\">Builds the bytes for the &quot;get&quot; command.</div></div>",551:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype551\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> ByteStream buildCommand_set(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">PositionOffset&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">offset</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Builds the bytes for the &quot;set&quot; command.</div></div>"});