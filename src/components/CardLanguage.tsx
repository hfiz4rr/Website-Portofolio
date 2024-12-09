import React, { useState } from 'react';
import { 
  Card, 
  CardContent, 
  Typography, 
  Grid, 
  useTheme 
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import { FaChessPawn } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { SiKotlin } from "react-icons/si";
import { FaGolang } from "react-icons/fa6";
import { TbBrandCpp } from "react-icons/tb";
import { FaPhp } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IconType } from 'react-icons'

interface LanguageConfig {
  name: string;
  logo: IconType;
  bgColor: string;
  borderColor: string;
}

const languageConfigs: LanguageConfig[] = [
  {
    name: 'JavaScript',
    logo: IoLogoJavascript,
    bgColor: '#F7DF1E',
    borderColor: '#F7DF1E'
  },
  {
    name: 'C++',
    logo: TbBrandCpp,
    bgColor: '#00599C',
    borderColor: '#00599C'
  },
  {
    name: 'PawnCode',
    logo: FaChessPawn,
    bgColor: '#FFB700',
    borderColor: '#FFB700'
  },
  {
    name: 'PHP',
    logo: FaPhp,
    bgColor: '#777BB3',
    borderColor: '#777BB3'
  }
];

interface LanguageCardProps {
  active?: boolean;
  bgColor?: string;
}

const LanguageCard = styled(Card, {
  shouldForwardProp: (prop) => prop !== 'active' && prop !== 'bgColor'
})<LanguageCardProps>(({ theme, active, bgColor }) => {
  const isDarkMode = getComputedStyle(document.documentElement).getPropertyValue('--background') === '#0a0a0a'
  
  return {
    width: '100%',
    height: '200px', 
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    borderRadius: '16px', 
    backgroundColor: window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'rgb(46,46,46)' 
      : 'rgba(231,231,231,0.716)',
    border: active 
      ? `4px solid ${bgColor}` 
      : `1px solid ${theme.palette.divider}`,
    boxShadow: active 
      ? `0 0 110px 0 ${bgColor}50` 
      : 'none',
    '&:hover': {
      transform: 'scale(1.05)',
    }
  };
});


const CardLanguage: React.FC = () => {
  const [activeLanguage, setActiveLanguage] = useState<string | null>(null);
  const theme = useTheme();

  const handleCardClick = (language: string) => {
    setActiveLanguage(language);
  };

  return (
    <Grid 
      container 
      spacing={3} 
      sx={{ 
        padding: 2,
        display: 'flex', 
        justifyContent: 'center' 
      }}
    >
      {languageConfigs.map((lang) => (
        <Grid item xs={6} sm={4} md={3} key={lang.name}>
          <LanguageCard
            active={activeLanguage === lang.name}
            bgColor={lang.borderColor}
            onClick={() => handleCardClick(lang.name)}
          >
            <div style={{ 
              fontSize: '64px', 
              color: lang.bgColor,
              marginBottom: '8px'
            }}>
              <lang.logo />
            </div>
            <CardContent sx={{ 
              textAlign: 'center',
              padding: '8px !important',
              marginTop: '-16px'
            }}>
              <Typography variant="h6" color="text.primary" sx={{ color: 'var(--foreground)', fontFamily: 'Poppins',}}>
                {lang.name}
              </Typography>
            </CardContent>
          </LanguageCard>
        </Grid>
      ))}
    </Grid>
  );
};

export default CardLanguage;