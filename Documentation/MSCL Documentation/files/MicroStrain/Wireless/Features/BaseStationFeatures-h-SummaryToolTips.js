NDSummary.OnToolTipsLoaded("File:MicroStrain/Wireless/Features/BaseStationFeatures.h",{3242:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype3242\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">BaseStationFeatures</div></div></div><div class=\"TTSummary\">Contains information on which features are supported by a BaseStation.</div></div>",3244:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3244\" class=\"NDPrototype NoParameterForm\">BaseStationInfo m_baseInfo</div><div class=\"TTSummary\">The BaseStationInfo object containing basic information retrieved from eeprom about the BaseStation.</div></div>",3246:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3246\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">BaseStationFeatures(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">BaseStationInfo&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">info</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a BaseStationFeatures object.</div></div>",3247:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3247\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> std::unique_ptr&lt;BaseStationFeatures&gt; create(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">BaseStationInfo&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">info</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Builds and returns a BaseStationFeatures pointer based on the given parameters.</div></div>",3248:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3248\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual bool</span> supportsTransmitPower(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">TransmitPower&nbsp;</td><td class=\"PName last\">power</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Checks if a WirelessTypes::TransmitPower is supported by this BaseStation.</div></div>",3249:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3249\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual bool</span> supportsCommunicationProtocol(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">CommProtocol&nbsp;</td><td class=\"PName last\">protocol</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Checks if a WirelessTypes::CommProtocol is supported by this BaseStation.</div></div>",3250:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3250\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> supportsButtons() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks if the BaseStation supports Button configuration.</div></div>",3251:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3251\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> supportsAnalogPairing() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks if the BaseStation supports Analog Pairing configuration.</div></div>",3252:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3252\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> supportsBeaconStatus() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks if the BaseStation supports the beaconStatus command.</div></div>",3253:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3253\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> supportsRfSweepMode() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks if the BaseStation supports RF Sweep Mode.&nbsp; Note: This checks if the standard RF sweep mode across the BaseStation\'s supported operating frequencies is supported.&nbsp; Use supportsCustomRfSweepMode to check if customizing the frequencies to be scanned is supported.</div></div>",3254:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3254\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> supportsCustomRfSweepMode() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks if the BaseStation supports the Custom RF Sweep Mode (providing custom frequency ranges).</div></div>",3255:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3255\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual uint8</span> buttonCount() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the total number of buttons that are supported.</div></div>",3256:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3256\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual uint8</span> analogPortCount() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the total number of analog ports that are supported.</div></div>",3257:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3257\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual const</span> WirelessTypes::TransmitPowers transmitPowers() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets a list of the WirelessTypes::TransmitPowers that are supported by this BaseStation.</div></div>",3258:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3258\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual const</span> WirelessTypes::CommProtocols commProtocols() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets a list of WirelessTypes::CommProtocols that are supported by this BaseStation.</div></div>",3259:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3259\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> supportsNewTransmitPowers() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks if the BaseStation supports the new transmit powers (true), or the old ones (false).</div></div>",3260:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3260\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> supportsEepromCommitViaRadioReset() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks if eeprom changes can be committed by only cycling the radio, instead of cycling power.</div></div>",3261:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3261\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> supportsEeprom1024AndAbove() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks if the Node supports reading eeprom location 1024 and above.</div></div>",3262:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3262\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> supportsCommProtocolEeprom() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks if the Communication Protocol eeprom location is supported.</div></div>"});