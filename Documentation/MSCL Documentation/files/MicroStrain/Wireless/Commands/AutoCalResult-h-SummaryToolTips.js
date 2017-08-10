NDSummary.OnToolTipsLoaded("File:MicroStrain/Wireless/Commands/AutoCalResult.h",{2150:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype2150\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">AutoCalResult</div></div></div><div class=\"TTSummary\">Abstract base class for AutoCal result classes.</div></div>",2152:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2152\" class=\"NDPrototype NoParameterForm\">WirelessTypes::AutoCalCompletionFlag completionFlag() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the WirelessTypes::AutoCalCompletionFlag of the AutoCal operation result.</div></div>",2153:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2153\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> parse(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">Bytes&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">autoCalInfo</td></tr></table></td><td class=\"PAfterParameters\">) = <span class=\"SHNumber\">0</span></td></tr></table></div><div class=\"TTSummary\">Parses the auto cal info bytes sent in the successful response packet.</div></div>",2155:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2155\" class=\"NDPrototype NoParameterForm\">WirelessTypes::AutoCalCompletionFlag m_completionFlag</div><div class=\"TTSummary\">The WirelessTypes::AutoCalCompletionFlag of the AutoCal operation.</div></div>",2156:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype2156\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">AutoCalResult_shmLink</div></div></div><div class=\"TTSummary\">Holds the result information from an autoCal_shmLink command.</div></div>",2158:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2158\" class=\"NDPrototype NoParameterForm\">WirelessTypes::AutoCalShmErrorFlag m_errorFlagCh1</div><div class=\"TTSummary\">The WirelessTypes::AutoCalShmErrorFlag for the channel 1 strain sensor.</div></div>",2159:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2159\" class=\"NDPrototype NoParameterForm\">WirelessTypes::AutoCalShmErrorFlag m_errorFlagCh2</div><div class=\"TTSummary\">The WirelessTypes::AutoCalShmErrorFlag for the channel 2 strain sensor.</div></div>",2160:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2160\" class=\"NDPrototype NoParameterForm\">WirelessTypes::AutoCalShmErrorFlag m_errorFlagCh3</div><div class=\"TTSummary\">The WirelessTypes::AutoCalShmErrorFlag for the channel 3 strain sensor.</div></div>",2161:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2161\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_offsetCh1</div><div class=\"TTSummary\">The offset applied for the channel 1 strain sensor.</div></div>",2162:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2162\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_offsetCh2</div><div class=\"TTSummary\">The offset applied for the channel 2 strain sensor.</div></div>",2163:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2163\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_offsetCh3</div><div class=\"TTSummary\">The offset applied for the channel 3 strain sensor.</div></div>",2164:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2164\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_temperature</div><div class=\"TTSummary\">The temperature at the time of calibration.</div></div>",2166:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2166\" class=\"NDPrototype NoParameterForm\">WirelessTypes::AutoCalShmErrorFlag errorFlagCh1() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the WirelessTypes::AutoCalShmErrorFlag for the channel 1 strain sensor.</div></div>",2167:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2167\" class=\"NDPrototype NoParameterForm\">WirelessTypes::AutoCalShmErrorFlag errorFlagCh2() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the WirelessTypes::AutoCalShmErrorFlag for the channel 2 strain sensor.</div></div>",2168:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2168\" class=\"NDPrototype NoParameterForm\">WirelessTypes::AutoCalShmErrorFlag errorFlagCh3() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the WirelessTypes::AutoCalShmErrorFlag for the channel 3 strain sensor.</div></div>",2169:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2169\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> offsetCh1() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the offset applied for the channel 1 strain sensor.</div></div>",2170:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2170\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> offsetCh2() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the offset applied for the channel 2 strain sensor.</div></div>",2171:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2171\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> offsetCh3() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the offset applied for the channel 3 strain sensor.</div></div>",2172:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2172\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> temperature() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the temperature (in ?C) at the time of the calibration.</div></div>",2173:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2173\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> parse(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">Bytes&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">autoCalInfo</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">final</span></td></tr></table></div><div class=\"TTSummary\">Parses the auto cal info bytes for the shm-link.</div></div>",2174:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype2174\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">AutoShuntCalResult</div></div></div><div class=\"TTSummary\">Holds the result information from an autoCal_shunt command.</div></div>",2176:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2176\" class=\"NDPrototype NoParameterForm\">WirelessTypes::AutoShuntCalErrorFlag m_errorFlag</div><div class=\"TTSummary\">The WirelessTypes::AutoShuntCalErrorFlag for the shunt calibration.</div></div>",2177:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2177\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_slope</div><div class=\"TTSummary\">The slope result of the shunt calibration.</div></div>",2178:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2178\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_offset</div><div class=\"TTSummary\">The offset result of the shunt calibration</div></div>",2179:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2179\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_baseMedian</div><div class=\"TTSummary\">The median of the baseline data sampled during the shunt calibration.</div></div>",2180:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2180\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_baseMin</div><div class=\"TTSummary\">The minimum of the baseline data sampled during the shunt calibration.</div></div>",2181:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2181\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_baseMax</div><div class=\"TTSummary\">The maximum of the baseline data sampled during the shunt calibration.</div></div>",2182:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2182\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_shuntMedian</div><div class=\"TTSummary\">The median of the shunted data sampled during the shunt calibration.</div></div>",2183:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2183\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_shuntMin</div><div class=\"TTSummary\">The minimum of the shunted data sampled during the shunt calibration.</div></div>",2184:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2184\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_shuntMax</div><div class=\"TTSummary\">The maximum of the shunted data sampled during the shunt calibration.</div></div>",2186:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2186\" class=\"NDPrototype NoParameterForm\">WirelessTypes::AutoShuntCalErrorFlag errorFlag() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the WirelessTypes::AutoShuntCalErrorFlag for the shunt calibration.</div></div>",2187:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2187\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> slope() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the slope result of the shunt calibration.&nbsp; Note: This value was not applied to the Node. You will need to manually apply if desired.</div></div>",2188:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2188\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> offset() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the offset result of the shunt calibration.&nbsp; Note: This value was not applied to the Node. You will need to manually apply if desired.</div></div>",2189:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2189\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> baseMedian() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the median of the baseline data sampled during the shunt calibration.</div></div>",2190:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2190\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> parse(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">Bytes&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">autoCalInfo</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">final</span></td></tr></table></div><div class=\"TTSummary\">Parses the auto cal info bytes for the shm-link.</div></div>"});