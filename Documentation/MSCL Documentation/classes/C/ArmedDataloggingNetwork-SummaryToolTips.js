NDSummary.OnToolTipsLoaded("CClass:ArmedDataloggingNetwork",{7204:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype7204\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">ArmedDataloggingNetwork</div></div></div><div class=\"TTSummary\">Used to setup and start an Armed Datalogging network of wireless nodes.</div></div>",7206:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7206\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">ArmedDataloggingNetwork(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">BaseStation&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">networkBaseStation</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates an ArmedDataloggingNetwork object used to setup and start an Armed Datalogging network.</div></div>",7208:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype7208\" class=\"NDPrototype NoParameterForm\">BaseStation m_networkBase</div><div class=\"TTSummary\">The BaseStation that will act as the parent base station for this network.</div></div>",7209:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype7209\" class=\"NDPrototype NoParameterForm\">std::map&lt;NodeAddress, std::<span class=\"SHKeyword\">string</span>&gt; m_nodes</div><div class=\"TTSummary\">A map of node addresses to messages to be set for datalogging. This serves as the list of nodes in the network.</div></div>",7211:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7211\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> addNode(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">WirelessNode&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName\">node,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName\">message&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHString\">&quot;&quot;</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Adds a WirelessNode to the Armed Datalogging network. If the Node already exists in the network, it will not be added.&nbsp; The Node\'s parent BaseStation should be the same as the network\'s master BaseStation.&nbsp; The Node should have its sampling configuration set to Armed Datalogging mode prior to adding to be successfully added.</div></div>",7212:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7212\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> removeNode(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">NodeAddress&nbsp;</td><td class=\"PName last\">nodeAddress</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Removes a WirelessNode from the Armed Datalogging network, if it exists in the network.</div></div>",7213:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7213\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> startSampling()</div><div class=\"TTSummary\">Starts the network sampling by individually arming each Node and then broadcasting the trigger to all Nodes that are armed.</div></div>",7214:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7214\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> armNodes()</div><div class=\"TTSummary\">Sends the ArmForDatalogging command to each Node in the network.</div></div>",7215:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7215\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> triggerArmedNodes()</div><div class=\"TTSummary\">Sends a broadcast trigger to start all Nodes that are currently armed.</div></div>"});