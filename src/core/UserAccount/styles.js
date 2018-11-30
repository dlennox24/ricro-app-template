const styles = theme => ({
  profileImg: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    padding: theme.spacing.unit,
    '& img': {
      width: 200,
      height: 200,
    },
    '& > button': {
      margin: `${theme.spacing.unit * 2}px 0`,
    },
  },
  column: {
    padding: theme.spacing.unit * 3,
  },
});

export default styles;
