import Styled from 'styled-components/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Colors } from '../const/Colors';


const ViewWrapper = Styled.View`
justify-content:${(props: any) =>
    props?.spaceBetween ? 'space-between' : 'flex-start'};
`;

const HeightWrapper = Styled.View`
height:${(props: any) => (props?.hGap ? props?.hGap : 0)}
`;

const WidthWrapper = Styled.View`
width:${(props: any) => (props?.wGap ? props?.wGap : 0)}
`;

const Container = Styled.View`
  flex: 1;
  background-color:${Colors.lightDimWhiteColor};
`;

const FlexSBWrapper = Styled.View`
  flex-direction:row;
  align-items:center;
  justify-content:space-between;
`;

const FlexSAWrapper = Styled.View`
  flex-direction:row;
  align-items:center;
  justify-content:space-around;
`;

const FlexJCWrapper = Styled.View`
  height:100%;
  flex-direction:column;
  justify-content:center;
`;

const FlexRowWrap = Styled.View`
  flex-direction:row;
`;
const FlexRAWrap = Styled.View`
  flex-direction:row;
  align-items:center;
`;

const FelxCCWrap = Styled.View`
  align-items:center;
  justify-content:center;
`;

const FlexRAFEWrap = Styled.View`
  flex-direction:row;
  align-items:center;
  justify-content: ${(props: any) =>
    props?.jcGap ? props?.jcGap : 'flex-end'};
`;

const FlexCCEWrap = Styled.View`
  flex-direction:column;
  align-items:flex-end;
  justify-content:space-between;
  height:100%;
`;

const PaddingHVGap = Styled.View`
  padding-horizontal:${(props: any) => (props?.phGap ? props?.phGap : 0)}; 
  padding-vertical:${(props: any) => (props?.pvGap ? props?.pvGap : 0)}; 
`;

const MarginHVGap = Styled.View`
  margin-horizontal:${(props: any) => (props?.phGap ? props?.phGap : 0)}; 
  margin-vertical:${(props: any) => (props?.pvGap ? props?.pvGap : 0)}; 
`;

const PaddingAllGap = Styled.View`
  padding-top:${(props: any) => (props?.ptGap ? props?.ptGap : 0)};
  padding-bottom:${(props: any) => (props?.pbGap ? props?.pbGap : 0)};
  padding-left:${(props: any) => (props?.plGap ? props?.plGap : 0)};
  padding-right:${(props: any) => (props?.prGap ? props?.prGap : 0)};
`;

const MarginAllGap = Styled.View`
  margin-top:${(props: any) => (props?.mtGap ? props?.mtGap : 0)};
  margin-bottom:${(props: any) => (props?.mbGap ? props?.mbGap : 0)};
  margin-left:${(props: any) => (props?.mlGap ? props?.mlGap : 0)};
  margin-right:${(props: any) => (props?.mrGap ? props?.mrGap : 0)};
`;

const BottomWrapBox = Styled.View`
  position:absolute;
  bottom:${(props: any) => (props?.bGap ? props?.bGap : 0)};
  width:100%;
`;

const Text = Styled.Text`
  text-align:${(props: any) =>
    props.middle ? 'center' : props?.leftText ? 'left' : 'justify'};
  font-family:${(props: any) =>
    props.heavy ? 'OpenSans-SemiBold' : 'OpenSans-Regular'};
  color:${(props: any) => (props?.crColor ? props?.crColor : '#000000')};
  // font-weight:${(props: any) => (props.heavy ? 'bold' : 'normal')};
  padding-top:${(props: any) => (props?.ptGap ? props?.ptGap : 0)};
  padding-left:${(props: any) => (props?.plGap ? props?.plGap : 0)};
  text-transform: ${(props: any) => (props?.ttGap ? props?.ttGap : 'none')};
  ${(props: any) => {
    switch (true) {
      case props.exlarge:
        return `font-size:28px`;
      case props.large:
        return `font-size:22px`;
      case props.medium:
        return `font-size:20px`;
      case props.small:
        return `font-size:18px`;
      case props.exsmall:
        return `font-size:16px`;
      case props.verySmall:
        return `font-size:12px`;
      default:
        return `font-size:14px`;
    }
  }}
`;

const HrLine = Styled.View`
  background-color:${Colors.lightGrayColor};
  width:100%;
  height:${(props: any) => (props?.hGap ? props?.hGap : 1)};
`;

const VtLine = Styled.View`
  background-color:${(props: any) =>
    props?.bgGap ? props?.bgGap : Colors.lightGrayColor};
  width:1;
  height:100%;
`;

const BorderWithRadius = Styled.View`
  border-width:1;
  border-color:${(props: any) =>
    props?.crGap ? props?.crGap : Colors.blackColor}
  border-radius:${(props: any) => (props?.brGap ? props?.brGap : 0)}; 
  padding-horizontal:${(props: any) => (props?.phGap ? props?.phGap : 0)}; 
  padding-vertical:${(props: any) => (props?.pvGap ? props?.pvGap : 0)};
  background-color:${(props: any) =>
    props?.bgGap ? props?.bgGap : Colors.whiteColor}
  
`;

const InputTextField = Styled.TextInput`
  padding-vertical:${hp(1.7)};
  padding-left:${(props: any) => (props?.plGap ? props?.plGap : 0)};
  width:100%;
`;


export {
  ViewWrapper,
  HeightWrapper,
  FlexJCWrapper,
  Container,
  FlexSBWrapper,
  PaddingHVGap,
  Text,
  FlexRowWrap,
  FlexRAWrap,
  MarginHVGap,
  PaddingAllGap,
  MarginAllGap,
  HrLine,
  VtLine,
  FlexRAFEWrap,
  BorderWithRadius,
  FlexCCEWrap,
  WidthWrapper,
  FelxCCWrap,
  InputTextField,
  BottomWrapBox,
  FlexSAWrapper,
};
