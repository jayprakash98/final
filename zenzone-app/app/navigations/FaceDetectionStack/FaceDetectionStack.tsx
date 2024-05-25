import FaceExpression from "@camera/FaceDetection";
import { FaceDetectionStackRoutes } from "@constants/screens";
import useStyle from "@hooks/useStyle";
import { createStackNavigator } from "@react-navigation/stack";
import DetectedFace from "@screens/FaceDetection/DetectedFace";
import TopicMusic from "@screens/HomePage/TopicMusic";
import React from "react";

const Stack = createStackNavigator();

const FaceDetectionStack = () => {
  const { color } = useStyle();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: color.main,
          elevation: 0,
        },
        headerTintColor: color.textColor,
        headerTitleAlign: "center",
        cardStyle: {
          backgroundColor: "transparent",
        },
        headerMode: "float",
        headerShown: false,
      }}
    >
      <Stack.Group>
        <Stack.Screen
          name={FaceDetectionStackRoutes.FaceDetection}
          component={FaceExpression}
        />
      </Stack.Group>

      <Stack.Group>
        <Stack.Screen
          name={FaceDetectionStackRoutes.DetectedFace}
          component={DetectedFace}
        />
      </Stack.Group>

      <Stack.Group screenOptions={{ presentation: "card" }}>
        <Stack.Screen
          name={FaceDetectionStackRoutes.SelectedExpression}
          component={TopicMusic}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default FaceDetectionStack;
