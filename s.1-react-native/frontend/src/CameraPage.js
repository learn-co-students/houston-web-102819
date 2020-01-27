import React, { useState, useEffect } from 'react';
import { Text, Button, View } from './components';
import { Camera } from 'expo-camera';

export function CameraPage() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    Camera.requestPermissionsAsync().then( permission => {
        if(permission.status === 'granted'){
            setHasPermission(true);
        } else {
            setHasPermission(false);
        }
    })
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View inline style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} type={type}>
          <Button
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            Flip
          </Button>
      </Camera>
    </View>
  );
}