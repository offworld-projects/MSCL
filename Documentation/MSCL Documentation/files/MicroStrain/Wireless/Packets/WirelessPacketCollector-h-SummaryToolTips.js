NDSummary.OnToolTipsLoaded("File:MicroStrain/Wireless/Packets/WirelessPacketCollector.h",{4751:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype4751\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">WirelessPacketCollector</div></div></div><div class=\"TTSummary\">Class that sets/matches expected responses, and stores all the wireless packets</div></div>",4753:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4753\" class=\"NDPrototype NoParameterForm\">WirelessPacketCollector()</div><div class=\"TTSummary\">The default constructor for the WirelessPacketCollector</div></div>",4754:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4754\" class=\"NDPrototype NoParameterForm\">~WirelessPacketCollector()</div><div class=\"TTSummary\">The destructor for the WirelessPacketCollector</div></div>",4756:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype4756\" class=\"NDPrototype NoParameterForm\">circular_data_buffer m_dataPackets</div><div class=\"TTSummary\">A circular buffer that holds WirelessDataPackets</div></div>",4757:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype4757\" class=\"NDPrototype NoParameterForm\">circular_discovery_buffer m_nodeDiscoveryPackets</div><div class=\"TTSummary\">A circular buffer that holds NodeDiscovery objects</div></div>",4758:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype4758\" class=\"NDPrototype NoParameterForm\">WirelessDataPacket m_currentDataPacket</div><div class=\"TTSummary\">The current WirelessDataPacket in the buffer</div></div>",4759:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype4759\" class=\"NDPrototype NoParameterForm\">std::mutex m_packetMutex</div><div class=\"TTSummary\">A mutex used for thread safety when accessing/modifying the m_dataPackets buffer</div></div>",4760:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype4760\" class=\"NDPrototype NoParameterForm\">std::mutex m_nodeDiscoveryMutex</div><div class=\"TTSummary\">A mutex used for thread safety when accessing/modifying the m_nodeDiscoveryPackets buffer</div></div>",4761:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype4761\" class=\"NDPrototype NoParameterForm\">std::condition_variable m_emptyBufferCondition</div><div class=\"TTSummary\">Allows the write to buffer thread to tell the reading thread when data is available</div></div>",4763:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4763\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> addDataPacket(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">WirelessPacket&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">packet</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Adds a data packet to the data packets circular buffer.</div></div>",4764:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4764\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> addNodeDiscoveryPacket(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">WirelessPacket&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">packet</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Adds a Node Discovery packet to the circular buffer.&nbsp; The provided WirelessPacket must be a valid Node Discovery packet.</div></div>",4765:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4765\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> getDataSweeps(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">vector&lt;DataSweep&gt;&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName\">sweeps,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td></td><td class=\"PName\">timeout&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span>,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td></td><td class=\"PName\">maxSweeps&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets up to the requested amount of data sweeps that have been collected.</div></div>",4766:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4766\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> totalSweeps()</div><div class=\"TTSummary\">Gets the total number of data sweeps that are currently in the buffer.</div></div>",4767:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4767\" class=\"NDPrototype NoParameterForm\">NodeDiscoveries getNodeDiscoveries()</div><div class=\"TTSummary\">Gets a vector of NodeDiscovery objects that were collected</div></div>",4768:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4768\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">WirelessDataPacket getNextDataPacket(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">timeout</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets the next WirelessDataPacket in the buffer</div></div>"});