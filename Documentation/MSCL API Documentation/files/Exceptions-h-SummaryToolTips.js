NDSummary.OnToolTipsLoaded("File:Exceptions.h",{1921:"<div class=\"NDToolTip TSection LC\"><div class=\"TTSummary\">Contains all the MicroStrain custom exceptions that can be thrown in MSCL</div></div>",1922:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1922\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error</div></div></div><div class=\"TTSummary\">The generic MicroStrain exception (base class)</div></div>",1923:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1923\" class=\"NDPrototype NoParameterForm\">Error() : m_description(<span class=\"SHString\">&quot;MSCL has thrown an exception.&quot;</span>)</div><div class=\"TTSummary\">Initializes the Error object with the default description</div></div>",1924:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1924\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Error(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">description</td></tr></table></td><td class=\"PAfterParameters\">) : m_description(description)</td></tr></table></div><div class=\"TTSummary\">Initializes the Error object with a custom description</div></div>",1925:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1925\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const char</span>* what () <span class=\"SHKeyword\">const throw</span> ()</div><div class=\"TTSummary\">overriding the default std::exception what() function, gets the description of the thrown exception</div></div>",1926:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1926\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error_NotSupported</div></div></div><div class=\"TTSummary\">A command/feature was attempted to be used that was not supported.</div></div>",1927:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1927\" class=\"NDPrototype NoParameterForm\">Error_NotSupported(): Error(<span class=\"SHString\">&quot;This feature is not supported.&quot;</span>)</div><div class=\"TTSummary\">Initializes the Error_NotSupported object with a default description</div></div>",1928:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1928\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Error_NotSupported(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">description</td></tr></table></td><td class=\"PAfterParameters\">) : Error(description)</td></tr></table></div><div class=\"TTSummary\">Initializes the Error_NotSupported object with a custom description</div></div>",1929:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1929\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error_NoData</div></div></div><div class=\"TTSummary\">There is no data available to be accessed</div></div>",1930:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1930\" class=\"NDPrototype NoParameterForm\">Error_NoData(): Error(<span class=\"SHString\">&quot;No data is available.&quot;</span>)</div><div class=\"TTSummary\">Initializes the Error_NoData object with a default description</div></div>",1931:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1931\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Error_NoData(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">description</td></tr></table></td><td class=\"PAfterParameters\">): Error(description)</td></tr></table></div><div class=\"TTSummary\">Initializes the Error_NoData object with a custom description</div></div>",1932:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1932\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error_BadDataType</div></div></div><div class=\"TTSummary\">Data of one type was accessed as another type (simple_any)</div></div>",1933:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1933\" class=\"NDPrototype NoParameterForm\">Error_BadDataType() : Error(<span class=\"SHString\">&quot;Data was accessed using the wrong data type.&quot;</span>)</div><div class=\"TTSummary\">Intializes the Error_BadDataType object with a default description</div></div>",1934:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1934\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error_UnknownSampleRate</div></div></div><div class=\"TTSummary\">The sample rate is invalid or unknown for the given device</div></div>",1935:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1935\" class=\"NDPrototype NoParameterForm\">Error_UnknownSampleRate() : Error(<span class=\"SHString\">&quot;Unknown Sample Rate.&quot;</span>)</div><div class=\"TTSummary\">Initializes the Error_UnknownSampleRate object with a default description</div></div>",1936:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1936\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Error_UnknownSampleRate(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">description</td></tr></table></td><td class=\"PAfterParameters\">) : Error(description)</td></tr></table></div><div class=\"TTSummary\">Initializes the Error_UnknownSampleRate object with a custom description</div></div>",1937:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1937\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error_Communication</div></div></div><div class=\"TTSummary\">The exception for failing to communicate with a device.</div></div>",1938:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1938\" class=\"NDPrototype NoParameterForm\">Error_Communication() : Error(<span class=\"SHString\">&quot;Failed to communicate with the device.&quot;</span>)</div><div class=\"TTSummary\">Initializes the Error_Communication object.</div></div>",1939:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1939\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Error_Communication(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">description</td></tr></table></td><td class=\"PAfterParameters\">) : Error(description)</td></tr></table></div><div class=\"TTSummary\">Initializes the Error_Communication object.</div></div>",1940:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1940\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error_NodeCommunication</div></div></div><div class=\"TTSummary\">The exception for failing to communicate with a WirelessNode.</div></div>",1941:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1941\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Error_NodeCommunication(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">NodeAddress&nbsp;</td><td class=\"PName last\">nodeAddress</td></tr></table></td><td class=\"PAfterParameters\">): Error_Communication(<span class=\"SHString\">&quot;Failed to communicate with the Wireless Node.&quot;</span>), m_nodeAddress(nodeAddress)</td></tr></table></div><div class=\"TTSummary\">Initializes the Error_NodeCommunication object.</div></div>",1942:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1942\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Error_NodeCommunication(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\">NodeAddress&nbsp;</td><td></td><td class=\"PName last\">nodeAddress,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">description</td></tr></table></td><td class=\"PAfterParameters\">): Error_Communication(description), m_nodeAddress(nodeAddress)</td></tr></table></div><div class=\"TTSummary\">Initializes the Error_NodeCommunication object.</div></div>",1943:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1943\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> NodeAddress nodeAddress() <span class=\"SHKeyword\">const throw</span> ()</div><div class=\"TTSummary\">gets the node address of the WirelessNode that failed to communicate</div></div>",1944:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1944\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error_Connection</div></div></div><div class=\"TTSummary\">The generic connection exception.</div></div>",1945:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1945\" class=\"NDPrototype NoParameterForm\">Error_Connection(): Error(<span class=\"SHString\">&quot;Connection error.&quot;</span>), m_code(<span class=\"SHNumber\">-1</span>)</div><div class=\"TTSummary\">Initializes the Error_Connection object, sets the error code to a default of -1</div></div>",1946:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1946\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Error_Connection(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">code</td></tr></table></td><td class=\"PAfterParameters\">): Error(<span class=\"SHString\">&quot;Connection error.&quot;</span>), m_code(code)</td></tr></table></div><div class=\"TTSummary\">Initializes the Error_Connection object</div></div>",1947:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1947\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Error_Connection(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">description</td></tr></table></td><td class=\"PAfterParameters\">): Error(description), m_code(<span class=\"SHNumber\">-1</span>)</td></tr></table></div><div class=\"TTSummary\">Initializes the Error_Connection object</div></div>",1948:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1948\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Error_Connection(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">description,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td></td><td class=\"PName last\">code</td></tr></table></td><td class=\"PAfterParameters\">): Error(description), m_code(code)</td></tr></table></div><div class=\"TTSummary\">Initializes the Error_Connection object</div></div>",1949:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1949\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const int</span> code() <span class=\"SHKeyword\">const throw</span> ()</div><div class=\"TTSummary\">gets the exception error code (system error codes, or -1 by default)</div></div>",1950:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1950\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error_InvalidSerialPort</div></div></div><div class=\"TTSummary\">There was an error with the specified COM Port.</div></div>",1951:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1951\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Error_InvalidSerialPort(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">code</td></tr></table></td><td class=\"PAfterParameters\">): Error_Connection(<span class=\"SHString\">&quot;Invalid Com Port.&quot;</span>, code)</td></tr></table></div><div class=\"TTSummary\">Initializes the Error_InvalidSerialPort object</div></div>",1952:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1952\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error_InvalidTcpServer</div></div></div><div class=\"TTSummary\">There was an error with the specified TCP/IP Server.</div></div>",1953:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1953\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Error_InvalidTcpServer(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td></td><td class=\"PName last\">code,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">message</td></tr></table></td><td class=\"PAfterParameters\">): Error_Connection(<span class=\"SHString\">&quot;Invalid TCP/IP Server: &quot;</span> + message, code)</td></tr></table></div><div class=\"TTSummary\">Initializes the Error_InvalidTcpServer object</div></div>",1954:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1954\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error_InvalidUnixSocket</div></div></div><div class=\"TTSummary\">There was an error with the specified Unix Socket.</div></div>",1955:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1955\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Error_InvalidUnixSocket(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td></td><td class=\"PName last\">code,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">message</td></tr></table></td><td class=\"PAfterParameters\">): Error_Connection(<span class=\"SHString\">&quot;Invalid Unix Socket: &quot;</span> + message, code)</td></tr></table></div><div class=\"TTSummary\">Initializes the Error_InvalidUnixSocket object</div></div>",1956:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1956\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error_InertialCmdFailed</div></div></div><div class=\"TTSummary\">The Inertial command has failed</div></div>",1957:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1957\" class=\"NDPrototype NoParameterForm\">Error_InertialCmdFailed() : Error(<span class=\"SHString\">&quot;The Inertial command has failed.&quot;</span>), m_code(<span class=\"SHNumber\">-1</span>)</div><div class=\"TTSummary\">Initializes the Error_InertialCmdFailed object, sets the error code to a default of -1</div></div>",1958:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1958\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Error_InertialCmdFailed(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">description</td></tr></table></td><td class=\"PAfterParameters\">) : Error(description), m_code(<span class=\"SHNumber\">-1</span>)</td></tr></table></div><div class=\"TTSummary\">Initializes the Error_InertialCmdFailed object, sets the error code to a default of -1</div></div>",1959:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1959\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Error_InertialCmdFailed(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">code</td></tr></table></td><td class=\"PAfterParameters\">): Error(<span class=\"SHString\">&quot;The Inertial command has failed.&quot;</span>), m_code(code)</td></tr></table></div><div class=\"TTSummary\">Initializes the Error_InertialCmdFailed object</div></div>",1960:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1960\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const int</span> code() <span class=\"SHKeyword\">const throw</span> ()</div><div class=\"TTSummary\">gets the exception error code</div></div>",1961:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1961\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error_InvalidConfig</div></div></div><div class=\"TTSummary\">The Configuration is invalid.</div></div>",1962:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1962\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Error_InvalidConfig(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ConfigIssues&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">issues</td></tr></table></td><td class=\"PAfterParameters\">): Error(<span class=\"SHString\">&quot;Invalid Configuration:&quot;</span>), m_issues(issues)</td></tr></table></div><div class=\"TTSummary\">Initializes the Error_InvalidConfig object</div></div>",1963:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1963\" class=\"NDPrototype NoParameterForm\">ConfigIssues issues() <span class=\"SHKeyword\">const throw</span> ()</div><div class=\"TTSummary\">Gets the ConfigIssues that caused the invalid configuration exception.</div></div>",1964:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1964\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error_InvalidNodeConfig</div></div></div><div class=\"TTSummary\">The Configuration for a WirelessNode is invalid.</div></div>",1965:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1965\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Error_InvalidNodeConfig(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ConfigIssues&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">issues,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">NodeAddress&nbsp;</td><td></td><td class=\"PName last\">nodeAddress</td></tr></table></td><td class=\"PAfterParameters\">) : Error_InvalidConfig(issues), m_nodeAddress(nodeAddress)</td></tr></table></div><div class=\"TTSummary\">Initializes the Error_InvalidNodeConfig object</div></div>",1966:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1966\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> NodeAddress nodeAddress() <span class=\"SHKeyword\">const throw</span> ()</div><div class=\"TTSummary\">Gets the node address of the Node that this exception pertains to.</div></div>"});