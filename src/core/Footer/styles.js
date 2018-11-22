const styles = theme => ({
  copyLinks: {
    width: '100%',
  },
  copyright: {
    color: theme.palette.common.white,
    margin: 0,
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing.unit,
      textAlign: 'center',
    },
  },
  csuLogo: {
    width: '100%',
  },
  footer: {
    padding: theme.spacing.unit * 1.5,
    '& img': {
      maxHeight: 65,
    },
  },
  footerLink: {
    borderRight: `${theme.palette.common.white} solid 1px`,
    display: 'initial',
    padding: '0px 10px',
    '&:first-child': {
      paddingLeft: 0,
    },
    '&:last-child': {
      border: 'none',
      paddingRight: 0,
    },
    '& a': {
      textDecoration: 'none',
      color: theme.palette.common.white,
      '&:hover': {
        borderBottom: `2px solid ${theme.palette.csu.primary.gold}`,
      },
    },
  },
  footerLinksContainer: {
    lineHeight: `${theme.spacing.unit * 4}px`,
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  },
  footerText: {
    display: 'table',
    margin: '0 auto',
  },
});

export default styles;
