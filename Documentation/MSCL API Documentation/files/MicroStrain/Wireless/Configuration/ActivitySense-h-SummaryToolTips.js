NDSummary.OnToolTipsLoaded("File:MicroStrain/Wireless/Configuration/ActivitySense.h",{627:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype627\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">ActivitySense</div></div></div><div class=\"TTSummary\">Contains all of the ActivitySense options that can be configured for a WirelessNode.&nbsp; Activity Sense is a power saving feature that allows a Node to be in a low-power state when no activity is suspected, and then immediately jump to its normal sampling state when a certain activity threshold is reached.</div></div>",628:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype628\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> enabled() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets whether Activity Sense is enabled or disabled in this options object.</div></div>",629:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype629\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> enabled(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">enable</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets whether Activity Sense is enabled or disabled in this options object.</div></div>",630:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype630\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> activityThreshold() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the current activity threshold value in this options object.&nbsp; This is the threshold the channel must exceed, for activityTime seconds to begin sampling.</div></div>",631:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype631\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> activityThreshold(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">threshold</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the activity threshold value in this options object.&nbsp; This is the threshold the channel must exceed, for activityTime seconds to begin sampling.</div></div>",632:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype632\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> inactivityThreshold() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the current inactivity threshold value in this options object.&nbsp; This is the threshold the channel must drop below, for inactivityTimeout seconds to begin sampling.</div></div>",633:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype633\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> inactivityThreshold(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">threshold</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the inactivity threshold value in this options object.&nbsp; This is the threshold the channel must drop below, for inactivityTimeout seconds to begin sampling.</div></div>",634:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype634\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> activityTime() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the amount of time that activity must be seen above activityThreshold before the Node enters its sampling mode, currently set in this options object.</div></div>",635:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype635\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> activityTime(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">time</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the amount of time that activity must be seen above activityThreshold before the Node enters its sampling mode, in this options object.</div></div>",636:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype636\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> inactivityTimeout() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the current amount of time that the Activity Sense mode runs without a value over the activityThreshold before it goes back into a low power mode, in this options object.</div></div>",637:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype637\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> inactivityTimeout(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">timeout</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the current amount of time that the Activity Sense mode runs without a value over the activityThreshold before it goes back into a low power mode, in this options object.</div></div>"});