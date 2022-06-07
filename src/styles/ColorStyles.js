import { DefaultColorTemplate, STANDARD_COLORS } from './ColorConfig';

const DefaultStyles = {
 success:{ color: STANDARD_COLORS.WHITE, backgroundColor: DefaultColorTemplate.SUCCESS },
 successHallow:{ color: DefaultColorTemplate.SUCCESS, borderColor: DefaultColorTemplate.SUCCESS, borderWidth:1 },
 primary:{ color: STANDARD_COLORS.WHITE, backgroundColor: DefaultColorTemplate.PRIMARY },
 primaryHallow:{ color: DefaultColorTemplate.PRIMARY, borderColor: DefaultColorTemplate.PRIMARY, borderWidth:1 },
 danger:{ color: STANDARD_COLORS.WHITE, backgroundColor: DefaultColorTemplate.DANGER },
 dangerHallow:{ color: DefaultColorTemplate.DANGER, borderColor: DefaultColorTemplate.DANGER, borderWidth:1 },
 warning:{ color: STANDARD_COLORS.WHITE, backgroundColor: DefaultColorTemplate.WARNING },
 warningHallow:{ color: DefaultColorTemplate.WARNING, borderColor: DefaultColorTemplate.WARNING, borderWidth:1 },
};

export default DefaultStyles;