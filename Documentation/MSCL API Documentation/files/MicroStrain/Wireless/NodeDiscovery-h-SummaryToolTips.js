NDSummary.OnToolTipsLoaded("File:MicroStrain/Wireless/NodeDiscovery.h",{2449:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype2449\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeDiscovery</div></div></div><div class=\"TTSummary\">Represents 1 node discovery, which is created when a Wireless Node Discovery packet is sent from a Node.&nbsp; Note: There are multiple versions of Node Discovery packets which have been developed over time.&nbsp; Each version has added more useful information. If an earlier version of the Node Discovery packet is heard, this NodeDiscovery object will have some information be invalid (set to default values).</div></div>",2450:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2450\" class=\"NDPrototype NoParameterForm\">NodeAddress nodeAddress() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the node address of the discovered Node.</div></div>",2451:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2451\" class=\"NDPrototype NoParameterForm\">WirelessTypes::Frequency frequency() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the WirelessTypes::Frequency of the discovered Node.</div></div>",2452:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2452\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> panId() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the PAN Id of the discovered Node.&nbsp; Note: Returns 0 if not present in the packet.</div></div>",2453:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2453\" class=\"NDPrototype NoParameterForm\">WirelessModels::NodeModel model() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the model of the discovered Node.</div></div>",2454:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2454\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> serialNumber() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the serial number of the discovered Node.&nbsp; Note: Returns 0 if not present in the packet.</div></div>",2455:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2455\" class=\"NDPrototype NoParameterForm\">Version firmwareVersion() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the firmware version of the discovered Node.&nbsp; Note: Returns 0.0.0 if not present in the packet.</div></div>",2456:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2456\" class=\"NDPrototype NoParameterForm\">WirelessTypes::DefaultMode defaultMode() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the WirelessTypes::DefaultMode of the discovered Node.&nbsp; Note: Returns 999 if not present in the packet.</div></div>",2457:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2457\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> builtInTestResult() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the result bitmask of the built in test.</div></div>",2458:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2458\" class=\"NDPrototype NoParameterForm\">WirelessTypes::CommProtocol communicationProtocol() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the WirelessTypes::CommProtocol of the discovered Node.</div></div>",2459:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2459\" class=\"NDPrototype NoParameterForm\">Version asppVersion_lxrs() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the ASPP protocol Version of the Node when it is in LXRS RadioMode.</div></div>",2460:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2460\" class=\"NDPrototype NoParameterForm\">Version asppVersion_lxrsPlus() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the ASPP protocol Version of the Node when it is in LXRS+ RadioMode.</div></div>",2461:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2461\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">int16</span> baseRssi() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the base station rssi of the discovered Node.</div></div>",2462:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2462\" class=\"NDPrototype NoParameterForm\">Timestamp timestamp() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the Timestamp of when the NodeDiscovery packet was received by MSCL.</div></div>",2463:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">typedef for a vector of NodeDiscovery objects</div></div>"});