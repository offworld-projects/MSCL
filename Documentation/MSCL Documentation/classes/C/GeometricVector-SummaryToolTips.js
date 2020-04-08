NDSummary.OnToolTipsLoaded("CClass:GeometricVector",{1599:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1599\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">GeometricVector</div></div></div><div class=\"TTSummary\">Defines a 3 dimensional, spatial vector.</div></div>",1601:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1601\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> GeometricVector VectorECEF(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">x_init,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">y_init,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">z_init</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Initializes and returns a new vector with the reference frame set to Earth-Centered, Earth-Fixed</div></div>",1602:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1602\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> GeometricVector VectorNED(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">north,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">east,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">down</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Initializes and returns a new vector with the reference frame set to North-East-Down</div></div>",1603:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1603\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">GeometricVector(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName\">x_init,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName\">y_init,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName\">z_init,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\">PositionVelocityReferenceFrame&nbsp;</td><td class=\"PName\">ref&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\">PositionVelocityReferenceFrame::ECEF</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a GeometricVector object.</div></div>",1604:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1604\" class=\"NDPrototype NoParameterForm\">GeometricVector()</div><div class=\"TTSummary\">Creates a zero-filled GeometricVector object.&nbsp; Default reference frame: ECEF</div></div>",1605:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1605\" class=\"NDPrototype NoParameterForm\">~GeometricVector()</div><div class=\"TTSummary\">Destroys a TimeUpdate object.</div></div>",1607:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1607\" class=\"NDPrototype NoParameterForm\">PositionVelocityReferenceFrame referenceFrame</div><div class=\"TTSummary\">The &lt;PositionVelocityReferenceFrame&gt; of this vector.&nbsp; Default: ECEF</div></div>",1609:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1609\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> x() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Only valid if referenceFrame is ECEF</div></div>",1610:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1610\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> y() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Only valid if referenceFrame is ECEF</div></div>",1611:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1611\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> z() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Only valid if referenceFrame is ECEF</div></div>",1612:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1612\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> north() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Only valid if referenceFrame is LLH_NED</div></div>",1613:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1613\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> east() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Only valid if referenceFrame is LLH_NED</div></div>",1614:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1614\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> down() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Only valid if referenceFrame is LLH_NED</div></div>",1616:"<div class=\"NDToolTip TVariable LC\"><div class=\"TTSummary\">The vector values.</div></div>",1618:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">A vector of GeometricVector objects</div></div>"});