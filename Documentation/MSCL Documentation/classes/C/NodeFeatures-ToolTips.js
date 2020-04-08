NDContentPage.OnToolTipsLoaded({3559:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype3559\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">HistogramOptions</div></div></div><div class=\"TTSummary\">Contains all of the Histogram options that can be configured for a WirelessNode.</div></div>",3593:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype3593\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">EepromLocation</div></div></div><div class=\"TTSummary\">Represents a single Eeprom Location.</div></div>",3626:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype3626\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">FatigueOptions</div></div></div><div class=\"TTSummary\">Contains all of the fatigue options that can be configured for a WirelessNode.</div></div>",4456:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype4456\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">ActivitySense</div></div></div><div class=\"TTSummary\">Contains all of the ActivitySense options that can be configured for a WirelessNode.&nbsp; Activity Sense is a power saving feature that allows a Node to be in a low-power state when no activity is suspected, and then immediately jump to its normal sampling state when a certain activity threshold is reached.</div></div>",4474:"<div class=\"NDToolTip TStruct LC\"><div class=\"TTSummary\">Holds information (read from eeprom) about a WirelessNode.</div></div>",4660:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype4660\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">ChannelGroup</div></div></div><div class=\"TTSummary\">Represents a group of channels that have combined settings.</div></div>",4974:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype4974\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeFeatures</div></div></div><div class=\"TTSummary\">Contains information on which features are supported by a WirelessNode.</div></div>",5072:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5072\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual</span> TimeSpan minTimeBetweenBursts(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">DataMode&nbsp;</td><td></td><td class=\"PName last\">dataMode,</td></tr><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">DataFormat&nbsp;</td><td></td><td class=\"PName last\">dataFormat,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ChannelMask&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">rawChannels,</td></tr><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">DerivedChannelMasks&nbsp;</td><td></td><td class=\"PName last\">derivedChannelMasks,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">SampleRate&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">rawSampleRate,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td></td><td class=\"PName last\">sweepsPerBurst,</td></tr><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">CommProtocol&nbsp;</td><td></td><td class=\"PName last\">commProtocol</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the minimum time that can be assigned for a Burst Sync Sampling session.</div></div>",5085:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5085\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual const</span> WirelessTypes::WirelessSampleRates sampleRates(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">SamplingMode&nbsp;</td><td class=\"PName last\">samplingMode,</td></tr><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">DataCollectionMethod&nbsp;</td><td class=\"PName last\">dataCollectionMethod,</td></tr><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">DataMode&nbsp;</td><td class=\"PName last\">dataMode</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets a list of the WirelessTypes::WirelessSampleRates that are supported by this Node for the given sampling mode.</div></div>",5098:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5098\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual const</span> InputRanges inputRanges(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ChannelMask&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">channels</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets a list of InputRanges that are supported by this Node for the specified channel mask.</div></div>",5605:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Represents the types of data collection methods that can be performed on the Node.</div></div>",5625:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Represents the types of data formats that Nodes can be configured to send when sampling.</div></div>",5635:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Represents the types of sampling modes the Node can be in.</div></div>",5642:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Represents the types of default modes the Node can have.&nbsp; This is the mode the Node starts in, as well as the mode the node goes into after an inactivity timeout.</div></div>",5666:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Represents the transmit powers that can be used for Wireless Devices.</div></div>",5794:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Represents the types of channels on Wireless Nodes.</div></div>",5807:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Represents the possible voltage input types</div></div>",5810:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Represents the settling times used for thermocouple and voltage inputs on some Wireless Nodes.</div></div>",5823:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Represents the Transducer types supported by some Wireless Nodes.</div></div>",5858:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The possible sample rates that are available for Wireless Nodes.</div></div>",5913:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The possible region codes for the device.</div></div>",5923:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The possible settings for ChannelGroups.</div></div>",5970:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The different modes a Fatigue Node can operate in.</div></div>",5977:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The filter options (used for anti-aliasing and low-pass filter)</div></div>",6017:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The channel frequency class filter options.</div></div>",6021:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The options available for configuring what happens when the storage limit is reached when logging to a Node.</div></div>",6024:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The options available for input range on supported Nodes.</div></div>",6159:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Available Data Modes.</div></div>",6164:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Available Derived Channel Categories for configuration.</div></div>",6178:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Available Communication Protocol types.</div></div>",6181:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Available Voltages.</div></div>",6191:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Available Sensor Output Modes.</div></div>",6203:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">Typedef for a map of &lt;DerivedChannelOption&gt; to ChannelMask pairs.</div></div>",6445:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype6445\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">WirelessNode</div></div></div><div class=\"TTSummary\">A class representing a MicroStrain wireless node</div></div>",6551:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype6551\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">WirelessChannel</div></div></div><div class=\"TTSummary\">Represents a channel on a WirelessNode. This can be used to gain information about the channel, view current settings that are applied, and update settings on the Node.</div></div>",7057:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype7057\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">ChannelMask</div></div></div><div class=\"TTSummary\">Represents the channel mask (active and inactive channels) for a WirelessNode.</div></div>",7235:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype7235\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">SampleRate</div></div></div><div class=\"TTSummary\">Represents a MicroStrain sample rate (rate at which data is sampling)</div></div>",7844:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype7844\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">TimeSpan</div></div></div><div class=\"TTSummary\">Represents a range of time</div></div>",7994:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype7994\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error_NotSupported</div></div></div><div class=\"TTSummary\">A command/feature was attempted to be used that was not supported.</div></div>",4525:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype4525\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeFeatures_wirelessImpactSensor</div></div></div><div class=\"TTSummary\">Contains information on features for the Wireless Impact nodes.</div></div>",4528:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype4528\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeFeatures_vlink_legacy</div></div></div><div class=\"TTSummary\">Contains information on features for the V-Link (legacy) node. Inherits from NodeFeatures.</div></div>",4534:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype4534\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeFeatures_vlink</div></div></div><div class=\"TTSummary\">Contains information on features for the V-Link node. Inherits from NodeFeatures.</div></div>",4537:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype4537\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeFeatures_torqueLink</div></div></div><div class=\"TTSummary\">Contains information on features for the SG-Link-Micro node. Inherits from NodeFeatures.</div></div>",4543:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype4543\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeFeatures_tclink3ch</div></div></div><div class=\"TTSummary\">Contains information on features for the TC-Link 3CH Node.</div></div>",4552:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype4552\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeFeatures_tclink6ch</div></div></div><div class=\"TTSummary\">Contains information on features for the TC-Link 6CH Node.</div></div>",4555:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype4555\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeFeatures_tclink1ch</div></div></div><div class=\"TTSummary\">Contains information on features for the TC-Link 1CH Node.</div></div>",4568:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype4568\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeFeatures_shmlink2</div></div></div><div class=\"TTSummary\">Contains information on features for the SHM-Link 2 node. Inherits from NodeFeatures.</div></div>",4571:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype4571\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeFeatures_shmlink</div></div></div><div class=\"TTSummary\">Contains information on features for the SHM-Link node. Inherits from NodeFeatures.</div></div>",4574:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype4574\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeFeatures_sglinkoemNoXR</div></div></div><div class=\"TTSummary\">Contains information on features for the SG-Link-OEM node. Inherits from NodeFeatures.</div></div>",4577:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype4577\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeFeatures_sglinkrgd</div></div></div><div class=\"TTSummary\">Contains information on features for the SG-Link node. Inherits from NodeFeatures.</div></div>",4580:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype4580\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeFeatures_sglinkoemHermetic</div></div></div><div class=\"TTSummary\">Contains information on features for the SG-Link-OEM node. Inherits from NodeFeatures.</div></div>",4583:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype4583\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeFeatures_sglinkoem</div></div></div><div class=\"TTSummary\">Contains information on features for the SG-Link-OEM node. Inherits from NodeFeatures.</div></div>",4589:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype4589\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeFeatures_sglinkMicro</div></div></div><div class=\"TTSummary\">Contains information on features for the SG-Link-Micro node. Inherits from NodeFeatures.</div></div>",4595:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype4595\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeFeatures_sglink</div></div></div><div class=\"TTSummary\">Contains information on features for the SG-Link node. Inherits from NodeFeatures.</div></div>",4598:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype4598\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeFeatures_rtdlink</div></div></div><div class=\"TTSummary\">Contains information on features for the RTD-Link Node.</div></div>",4607:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype4607\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeFeatures_glink2Internal</div></div></div><div class=\"TTSummary\">Contains information on features for the G-Link 2 (Internal Accels) nodes.</div></div>",4610:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype4610\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeFeatures_iepeLink</div></div></div><div class=\"TTSummary\">Contains information on features for the IEPE-Link.</div></div>",4616:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype4616\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeFeatures_glink2External</div></div></div><div class=\"TTSummary\">Contains information on features for the G-Link 2 (External Accel) nodes.</div></div>",4622:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype4622\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeFeatures_glink</div></div></div><div class=\"TTSummary\">Contains information on features for the G-Link nodes.</div></div>",4625:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype4625\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeFeatures_envlinkPro</div></div></div><div class=\"TTSummary\">Contains information on features for the ENV-Link Pro Node.</div></div>",4628:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype4628\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeFeatures_dvrtlink</div></div></div><div class=\"TTSummary\">Contains information on features for the DVRT-Link node. Inherits from NodeFeatures.</div></div>",4631:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype4631\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeFeatures_envlinkMini</div></div></div><div class=\"TTSummary\">Contains information on features for the ENV-Link Mini Node.</div></div>",4637:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype4637\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeFeatures_200series</div></div></div><div class=\"TTSummary\">Contains information on which features are supported by a 200-series WirelessNode.&nbsp; Inherits from NodeFeatures.</div></div>"});