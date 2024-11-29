import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import ProjetsModal from '../Modal/ProjetsModal';


const TitlebarImageList = () => {

  const projetId = 1 ;
  let projetImages = ProjetsModal.filter(image => image.id === projetId);

    if (!projetImages || projetImages.length === 0) {
        return <p> Aucune image disponible pour ce projet. </p>
    }

  return (

    <ImageList sx={{ width: 500, height: 450 }}> 

        {projetImages.map((item) => ( 
                    <ImageListItem key="Subheader"  cols={2}>
                    <ListSubheader component="div"> Image du projet {item.titre} </ListSubheader>
              </ImageListItem>
             ))}

      
      {projetImages.map((item) => (
        
        <ImageListItem key={item.id}>
          <img
            srcSet={`${item.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.image}?w=248&fit=crop&auto=format` }
            alt={item.titre}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={<span>{item.technologie.join(',')}</span>}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

export default TitlebarImageList ;