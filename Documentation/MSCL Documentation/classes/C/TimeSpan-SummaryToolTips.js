NDSummary.OnToolTipsLoaded("CClass:TimeSpan",{6000:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype6000\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">TimeSpan</div></div></div><div class=\"TTSummary\">Represents a range of time</div></div>",6002:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6002\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">explicit</span> TimeSpan(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint64</span>&nbsp;</td><td class=\"PName last\">nanoseconds</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a TimeSpan given the nanoseconds value.&nbsp; This constructor is private to force use of the static constructor methods to create a timespan.</div></div>",6004:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype6004\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint64</span> m_nanoseconds</div><div class=\"TTSummary\">The number of nanoseconds in the timespan</div></div>",6006:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6006\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">int64</span> compare(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">TimeSpan&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">other</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the difference (in nanoseconds) of the two TimeSpans.</div></div>",6007:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6007\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint64</span> getNanoseconds() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the nanoseconds resolution of the TimeSpan</div></div>",6008:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6008\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint64</span> getMicroseconds() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the microsecond resolution of the TimeSpan</div></div>",6009:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6009\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint64</span> getMilliseconds() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the millisecond resolution of the TimeSpan</div></div>",6010:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6010\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint64</span> getSeconds() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the seconds resolution of the TimeSpan</div></div>",6011:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6011\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> TimeSpan NanoSeconds(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint64</span>&nbsp;</td><td class=\"PName last\">nanoseconds</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a TimeSpan object from nanoseconds</div></div>",6012:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6012\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> TimeSpan MicroSeconds(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint64</span>&nbsp;</td><td class=\"PName last\">microseconds</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a TimeSpan object from microseconds</div></div>",6013:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6013\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> TimeSpan MilliSeconds(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint64</span>&nbsp;</td><td class=\"PName last\">milliseconds</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a TimeSpan object from milliseconds</div></div>",6014:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6014\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> TimeSpan Seconds(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint64</span>&nbsp;</td><td class=\"PName last\">seconds</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a TimeSpan object from seconds</div></div>",6015:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6015\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> TimeSpan Minutes(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">minutes</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a TimeSpan object from minutes</div></div>",6016:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6016\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> TimeSpan Hours(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">hours</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a TimeSpan object from hours</div></div>",6017:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6017\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> TimeSpan Days(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">days</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a TimeSpan object from days</div></div>"});