import React from 'react';
import { View, Text } from 'react-native';
import Video from 'react-native-video';

const ExerciseDetail2 = (props) => {
  const { exercise, fileName } = props.route.params;

  // Construct the video file name
  const videoFileName = 'DumbbellBenchPress.mp4';

  // Construct the video path as a URI
//   const videoUri = `../Videos/${fileName}/${videoFileName}`;
  const videoUri = require(`../Videos/dumbbellExercisesMen/DumbbellBicepCurls.mp4`);

  return (
    <View>
      <Text>{exercise.name}</Text>
      <Video
        source={videoUri}
        style={{ height: 320,width: 320,
        aspectRatio: 1 / 1, }}
        paused={false} // make it start
        repeat={true} // make it a loop
        resizeMode="cover"
      />
    </View>
  );
};

export default ExerciseDetail2;
