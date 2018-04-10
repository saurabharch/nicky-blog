import Typography from 'typography';
// import kirkhamTheme from 'typography-theme-kirkham';
import oceanBeachTheme from 'typography-theme-ocean-beach';

oceanBeachTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  a: {
    color: 'inherit',
    fontWeight: 700,
    textDecoration: 'none',
    borderBottom: '1px solid #18a1ff',
    boxShadow: 'inset 0 -2px 0px 0px #18a1ff',
    textShadow: 'none',
    backgroundImage: 'none',
    transition: 'all 100ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
  'a:hover': {
    background: '#18a1ff',
  },
});

const typography = new Typography(oceanBeachTheme);

export default typography;
