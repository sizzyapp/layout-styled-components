interface CSSObjects {
  [propertyName: string]: any;
}

export const flex: CSSObjects = {
  horizontal: {
    display: 'flex',
    flexDirection: 'row'
  },
  vertical: {
    display: 'flex',
    flexDirection: 'column'
  },
  flexWrap: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  centerHorizontal: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  wrap: {
    flexWrap: 'wrap'
  },
  noWrap: {
    flexWrap: 'nowrap'
  },
  centerHorizontalH: {
    justifyContent: 'center'
  },
  centerHorizontalV: {
    alignItems: 'center'
  },
  centerVertical: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  centerVerticalH: {
    alignItems: 'center'
  },
  centerVerticalV: {
    justifyContent: 'center'
  },
  spaceAround: {
    justifyContent: 'space-around'
  },
  spaceBetween: {
    justifyContent: 'space-between'
  },
  justifyEnd: {
    justifyContent: 'flex-end'
  },
  justifyStart: {
    justifyContent: 'flex-start'
  },
  alignStart: {
    alignContent: 'flex-start'
  },
  stretchSelf: {
    alignSelf: 'stretch'
  },
  alignItemsStart:{
    alignItems: 'flex-start'
  },
  selfEnd: {
    alignSelf: 'flex-end'
  }
};

export default flex;
