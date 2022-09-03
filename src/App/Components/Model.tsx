/* eslint-disable import/prefer-default-export */
import * as React from 'react';
import { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import MuiInput from '@mui/material/Input';

function Model(props: any) {
  const [widthValue, setWidthValue] = useState(0);
  const [heightValue, setHeightValue] = useState(0);
  const [depthValue, setDepthValue] = useState(0);

  const [xPosValue, setXPosValue] = useState(0);
  const [yPosValue, setYPosValue] = useState(0);
  const [zPosValue, setZPosValue] = useState(0);

  const [xRotValue, setXRotValue] = useState(0);
  const [yRotValue, setYRotValue] = useState(0);
  const [zRotValue, setZRotValue] = useState(0);

  const { content } = props;

  const changeWidthSlider = (event:any, value:any) => {
    setWidthValue(value);
    content.updateEvent(props.meshData.uuid, 'x-scale', value, 'basicAttribute');
  };
  const changeHeightSlider = (event:any, value:any) => {
    setHeightValue(value);
    content.updateEvent(props.meshData.uuid, 'y-scale', value, 'basicAttribute');
  };
  const changeDepthSlider = (event:any, value:any) => {
    setDepthValue(value);
    content.updateEvent(props.meshData.uuid, 'z-scale', value, 'basicAttribute');
  };
  const changeXPosSlider = (event:any, value:any) => {
    setXPosValue(value);
    content.updateEvent(props.meshData.uuid, 'x-position', value, 'basicAttribute');
  };
  const changeYPosSlider = (event:any, value:any) => {
    setYPosValue(value);
    content.updateEvent(props.meshData.uuid, 'y-position', value, 'basicAttribute');
  };
  const changeZPosSlider = (event:any, value:any) => {
    setZPosValue(value);
    content.updateEvent(props.meshData.uuid, 'z-position', value, 'basicAttribute');
  };
  const changeXRotSlider = (event:any, value:any) => {
    setXRotValue(value);
    content.updateEvent(props.meshData.uuid, 'x-rotation', value, 'basicAttribute');
  };
  const changeYRotSlider = (event:any, value:any) => {
    setYRotValue(value);
    content.updateEvent(props.meshData.uuid, 'y-rotation', value, 'basicAttribute');
  };
  const changeZRotSlider = (event:any, value:any) => {
    setZRotValue(value);
    content.updateEvent(props.meshData.uuid, 'z-rotation', value, 'basicAttribute');
  };

  /* const handleWidthInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWidthValue(event.target.value === '' ? '' : Number(event.target.value));
  }
  */

  const changeWidthInput = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    const inputWidth:any = event.target.value;
    setWidthValue(inputWidth);
  };

  useEffect(() => {
    if (props.meshData) {
      setWidthValue(props.meshData.scale[0].toFixed(2));
      setHeightValue(props.meshData.scale[1].toFixed(2));
      setDepthValue(props.meshData.scale[2].toFixed(2));
      setXPosValue(props.meshData.position[0].toFixed(2));
      setYPosValue(props.meshData.position[1].toFixed(2));
      setZPosValue(props.meshData.position[2].toFixed(2));
      setXRotValue(props.meshData.rotation[0].toFixed(2));
      setYRotValue(props.meshData.rotation[1].toFixed(2));
      setZRotValue(props.meshData.rotation[2].toFixed(2));
    }
  }, [props.meshData]);

  return (
    <>
    {props.meshData ? `UUID: ${props.meshData.uuid}` : ''}
<Box
    sx={{
      align: 'center',
      backgroundColor: 'primary.dark',
      borderRadius: 1,
      mx: 'auto',
      p: 2,
      textAlign: 'center',
    }}
      >
    <Typography variant='h6' fontWeight='bold' color='primary.main'>Scale</Typography>
    <Typography color='primary.light'>Width: <MuiInput
            onChange={() => { changeWidthInput; }}
            sx={{
              color: 'primary.light',
              width: 1 / 10,
            }}
            size="small"
            inputProps={{
              step: 1,
              min: 0,
              max: 100,
              type: 'number',
              value: widthValue,
              'aria-labelledby': 'input-slider',
            }}
          />
    <Slider onChange={changeWidthSlider}
        sx = {{
          width: 1 / 2,
          ml: 2.8,
        }}
        value={widthValue}
        size="small"
        aria-label="Small"
        valueLabelDisplay="auto"
      />
    </Typography>
    <Typography color='primary.light'>Height: <MuiInput
            sx={{
              color: 'primary.light',
              width: 1 / 10,
            }}
            size="small"
            inputProps={{
              step: 1,
              min: 0,
              max: 100,
              type: 'number',
              value: heightValue,
              'aria-labelledby': 'input-slider',
            }}
          />
    <Slider onChange={changeHeightSlider}
        sx = {{
          width: 1 / 2,
          ml: 2.8,
        }}
        value={heightValue}
        size="small"
        aria-label="Small"
        valueLabelDisplay="auto"
      />
    </Typography>
    <Typography color='primary.light'>Depth: <MuiInput
            sx={{
              color: 'primary.light',
              width: 1 / 10,
            }}
            size="small"
            inputProps={{
              step: 1,
              min: 0,
              max: 100,
              type: 'number',
              value: depthValue,
              'aria-labelledby': 'input-slider',
            }}
          />
    <Slider onChange={changeDepthSlider}
        sx = {{
          width: 1 / 2,
          ml: 2.8,
        }}
        value={depthValue}
        size="small"
        aria-label="Small"
        valueLabelDisplay="auto"
      />
    </Typography>

  </Box>

  <Box
    sx={{
      align: 'center',
      backgroundColor: 'primary.dark',
      borderRadius: 1,
      mx: 'auto',
      p: 2,
      textAlign: 'center',
    }}
      >
    <Typography variant='h6' fontWeight='bold' color='primary.main'>Position</Typography>
    <Typography color='primary.light'>X: <MuiInput
            onChange={() => changeWidthInput}
            sx={{
              color: 'primary.light',
              width: 1 / 10,
            }}
            size="small"
            inputProps={{
              step: 1,
              min: -50,
              max: 50,
              type: 'number',
              value: xPosValue,
              'aria-labelledby': 'input-slider',
            }}
          />
    <Slider onChange={changeXPosSlider}
        sx = {{
          width: 1 / 2,
          ml: 2.8,
        }}
        min={-50}
        max={50}
        value={xPosValue}
        size="small"
        aria-label="Small"
        valueLabelDisplay="auto"
      />
    </Typography>
    <Typography color='primary.light'>Y: <MuiInput
            sx={{
              color: 'primary.light',
              width: 1 / 10,
            }}
            size="small"
            inputProps={{
              step: 1,
              min: -50,
              max: 50,
              type: 'number',
              value: yPosValue,
              'aria-labelledby': 'input-slider',
            }}
          />
    <Slider onChange={changeYPosSlider}
        sx = {{
          width: 1 / 2,
          ml: 2.8,
        }}
        value={yPosValue}
        min={-50}
        max={50}
        size="small"
        aria-label="Small"
        valueLabelDisplay="auto"
      />
    </Typography>
    <Typography color='primary.light'>Z: <MuiInput
            sx={{
              color: 'primary.light',
              width: 1 / 10,
            }}
            size="small"
            inputProps={{
              step: 1,
              min: -50,
              max: 50,
              type: 'number',
              value: zPosValue,
              'aria-labelledby': 'input-slider',
            }}
          />
    <Slider onChange={changeZPosSlider}
        sx = {{
          width: 1 / 2,
          ml: 2.8,
        }}
        value={zPosValue}
        min={-50}
        max={50}
        size="small"
        aria-label="Small"
        valueLabelDisplay="auto"
      />
    </Typography>

  </Box>

  <Box
    sx={{
      align: 'center',
      backgroundColor: 'primary.dark',
      borderRadius: 1,
      mx: 'auto',
      p: 2,
      textAlign: 'center',
    }}
      >
    <Typography variant='h6' fontWeight='bold' color='primary.main'>Rotation</Typography>
    <Typography color='primary.light'>X: <MuiInput
            onChange={() => changeWidthInput}
            sx={{
              color: 'primary.light',
              width: 1 / 10,
            }}
            size="small"
            inputProps={{
              step: 1,
              min: -50,
              max: 50,
              type: 'number',
              value: xRotValue,
              'aria-labelledby': 'input-slider',
            }}
          />
    <Slider onChange={changeXRotSlider}
        sx = {{
          width: 1 / 2,
          ml: 2.8,
        }}
        min={-50}
        max={50}
        value={xRotValue}
        size="small"
        aria-label="Small"
        valueLabelDisplay="auto"
      />
    </Typography>
    <Typography color='primary.light'>Y: <MuiInput
            sx={{
              color: 'primary.light',
              width: 1 / 10,
            }}
            size="small"
            inputProps={{
              step: 1,
              min: -50,
              max: 50,
              type: 'number',
              value: yRotValue,
              'aria-labelledby': 'input-slider',
            }}
          />
    <Slider onChange={changeYRotSlider}
        sx = {{
          width: 1 / 2,
          ml: 2.8,
        }}
        min={-50}
        max={50}
        value={yRotValue}
        size="small"
        aria-label="Small"
        valueLabelDisplay="auto"
      />
    </Typography>
    <Typography color='primary.light'>Z: <MuiInput
            sx={{
              color: 'primary.light',
              width: 1 / 10,
            }}
            size="small"
            inputProps={{
              step: 1,
              min: -50,
              max: 50,
              type: 'number',
              value: zRotValue,
              'aria-labelledby': 'input-slider',
            }}
          />
    <Slider onChange={changeZRotSlider}
        sx = {{
          width: 1 / 2,
          ml: 2.8,
        }}
        min={-50}
        max={50}
        value={zRotValue}
        size="small"
        aria-label="Small"
        valueLabelDisplay="auto"
      />
    </Typography>

  </Box>
  </>
  );
}

export default Model;
