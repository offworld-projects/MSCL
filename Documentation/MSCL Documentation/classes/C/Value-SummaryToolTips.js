NDSummary.OnToolTipsLoaded("CClass:Value",{7636:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype7636\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Value</div></div></div><div class=\"TTSummary\">Represents a single value that can be stored/accessed in multiple ways.</div></div>",7638:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7638\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Value(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\">ValueType&nbsp;</td><td></td><td class=\"PName last\">type,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">anyType&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">value</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a Value object</div></div>",7639:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7639\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> Value BOOL(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">value</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Static helper function for making a Value object from a bool.</div></div>",7640:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7640\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> Value UINT8(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">value</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Static helper function for making a Value object from a uint8.</div></div>",7641:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7641\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> Value UINT16(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">value</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Static helper function for making a Value object from a uint16.</div></div>",7642:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7642\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> Value UINT32(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">value</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Static helper function for making a Value object from a uint32.</div></div>",7643:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7643\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> Value FLOAT(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">value</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Static helper function for making a Value object from a float.</div></div>",7644:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7644\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> Value DOUBLE(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">double</span>&nbsp;</td><td class=\"PName last\">value</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Static helper function for making a Value object from a double.</div></div>",7646:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype7646\" class=\"NDPrototype NoParameterForm\">anyType m_value</div><div class=\"TTSummary\">Holds the actual value as an anyType</div></div>",7647:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype7647\" class=\"NDPrototype NoParameterForm\">ValueType m_storedAs</div><div class=\"TTSummary\">The type that the value is stored as.&nbsp; This type should be inspected to determine how to read the m_value member</div></div>",7649:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7649\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> ValueType storedAs() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the ValueType that the data value is stored as. This type should be inspected to determine how to read the data value.</div></div>",7650:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7650\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual float</span> as_float() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the data value as a 4-byte float</div></div>",7651:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7651\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual double</span> as_double() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the data value as an 8-byte double</div></div>",7652:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7652\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual uint8</span> as_uint8() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the data value as a 1-byte unsigned integer</div></div>",7653:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7653\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual uint16</span> as_uint16() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the data value as a 2-byte unsigned integer</div></div>",7654:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7654\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual uint32</span> as_uint32() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the data value as a 4-byte unsigned integer</div></div>",7655:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7655\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual short</span> as_int16() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the data value as a 2-byte signed integer</div></div>",7656:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7656\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual int</span> as_int32() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the data value as a 4-byte signed integer</div></div>",7657:"<div class=\"NDToolTip TFunction LC\"><div class=\"TTSummary\">Gets the data value as a 1-byte boolean</div></div>",7658:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7658\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> ChannelMask as_ChannelMask() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the data value as a ChannelMask object.</div></div>",7659:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7659\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> std::<span class=\"SHKeyword\">string</span> as_string() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the data value as a string</div></div>"});