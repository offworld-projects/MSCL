NDSummary.OnToolTipsLoaded("File:MicroStrain/Wireless/BaseStationAnalogPair.h",{5382:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype5382\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">BaseStationAnalogPair</div></div></div><div class=\"TTSummary\">Represents an Analog Pairing on a BaseStation.</div></div>",5384:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5384\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">BaseStationAnalogPair(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">nodeAddress,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">nodeChannel,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">output_0V,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">output_3V</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a BaseStationAnalogPair object with the provided parameters.&nbsp; Note: This constructor is private to enforce using ::Float and ::NonFloat static functions for construction.</div></div>",5386:"<div class=\"NDToolTip TConstant LC\"><div class=\"TTSummary\">A (NaN) value representing that the paired node channel is not transmitting float point values.&nbsp; The outputVal_0V and outputVal_3V values should be set to this value if not being paired to a channel transmitting floats.</div></div>",5387:"<div class=\"NDToolTip TClass LC\"><div id=\"NDPrototype5387\" class=\"NDPrototype NoParameterForm\">BaseStationAnalogPair()</div><div class=\"TTSummary\">Creates a default constructed BaseStationAnalogPair object.</div></div>",5389:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5389\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> BaseStationAnalogPair Float(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">nodeAddress,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">nodeChannel,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">output_0V,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">output_3V</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a BaseStationAnalogPair object to be paired to WirelessNode\'s channel that is transmitting floating point values.</div></div>",5390:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5390\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> BaseStationAnalogPair NonFloat(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">nodeAddress,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">nodeChannel</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a BaseStationAnalogPair object to be paired to WirelessNode\'s channel that is NOT transmitting floating point values.</div></div>",5392:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5392\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> m_nodeAddress</div><div class=\"TTSummary\">The node address to pair.</div></div>",5393:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5393\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span> m_nodeChannel</div><div class=\"TTSummary\">The node\'s channel to pair.</div></div>",5394:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5394\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_outputVal_0V</div><div class=\"TTSummary\">The floating point value that represents 0 volts, if the node/channel is sending floating point data.</div></div>",5395:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5395\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_outputVal_3V</div><div class=\"TTSummary\">The floating point value that represents 3 volts, if the node/channel is sending floating point data.</div></div>",5397:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5397\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> nodeAddress() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the node address to be paired with that is currently set in this object.</div></div>",5398:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5398\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> nodeAddress(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">address</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the node address of the WirelessNode to be paired with.</div></div>",5399:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5399\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span> nodeChannel() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the node\'s channel to be paired with that is currently set in this object.</div></div>",5400:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5400\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> nodeChannel(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">channelNumber</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the node\'s channel of the WirelessNode to be paired with.</div></div>",5401:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5401\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> expectFloatData() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks whether floating point data is expected in this object.</div></div>",5402:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5402\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> expectFloatData(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">enable</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets whether floating point data is expected or not.&nbsp; Note: If enabling, this will set outputVal_0V to 0 and outputVal_3V to 65535. You should update these values accordingly.&nbsp; Note: If disabling, this will set outputVal_0V and outputVal_3V to CHANNEL_NOT_FLOAT.</div></div>",5403:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5403\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> outputVal_0V() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the output value that represents 0 Volts that is currently set in this object.</div></div>",5404:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5404\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> outputVal_0V(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">value</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the output value that represents 0 Volts.&nbsp; Note: Setting this to a NaN (CHANNEL_NOT_FLOAT) disables the float expectation and sets outputVal_3V to CHANNEL_NOT_FLOAT as well.&nbsp; Note: If outputVal_3V is set to CHANNEL_NOT_FLOAT when this is called with a real value, outputVal_3V will be updated to (value + 1.0).</div></div>",5405:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5405\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> outputVal_3V() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the output value that represents 3 Volts that is currently set in this object.</div></div>",5406:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5406\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> outputVal_3V(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">value</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the output value that represents 3 Volts.&nbsp; Note: Setting this to a NaN (CHANNEL_NOT_FLOAT) disables the float expectation and sets outputVal_0V to CHANNEL_NOT_FLOAT as well.&nbsp; Note: If outputVal_0V is set to CHANNEL_NOT_FLOAT when this is called with a real value, outputVal_0V will be updated to (value - 1.0).</div></div>"});