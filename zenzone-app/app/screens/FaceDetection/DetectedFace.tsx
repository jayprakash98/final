import { TopicsProps } from "@constants/Interfaces";
import { FaceDetectionStackRoutes, HomeStackRoutes } from "@constants/screens";
import { MyText, SafeView } from "@elements/SharedElements";
import useStyle from "@hooks/useStyle";
import { useNavigation } from "@react-navigation/core";
import { topics } from "@screens/TopicChoose/topics";
import HomeCard from "@shared/HomeCard";
import { HomeSkeleton } from "@shared/Skeletons";
import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

const DetectedFace = ({ route }) => {
  const { expression } = route.params;
  const { color } = useStyle();
  const [data, setData] = useState<any>([]);
  const navigation = useNavigation<any>();

  useEffect(() => {
    console.log("data", expression);

    setTimeout(() => {
      setData(
        topics.filter((item) => item.mood.includes(expression.toLowerCase()))
      );
      console.log(data);
    }, 2000);
    return () => {
      setData([]);
    };
  }, []);

  const goToTopicMusic = (item: TopicsProps) => {
    navigation.navigate(FaceDetectionStackRoutes.SelectedExpression, {
      item: item,
    });
  };

  return (
    <SafeView>
      <ScrollView overScrollMode="never">
        <View style={{ marginVertical: 20, paddingHorizontal: 10 }}>
          <MyText bold title>
            You look {expression} today
          </MyText>
          <MyText color={color.grey}>Recommended For You</MyText>
        </View>
        <View style={{ paddingHorizontal: 10, marginBottom: 20 }}>
          {data.length <= 0 && <HomeSkeleton />}

          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            {data.length > 0 &&
              data.map((item: TopicsProps, index: number) => (
                <View key={index}>
                  <HomeCard
                    onPress={() => {
                      goToTopicMusic(item);
                    }}
                    item={item}
                  />
                </View>
              ))}
          </View>
        </View>
      </ScrollView>
    </SafeView>
  );
};

export default DetectedFace;

const styles = StyleSheet.create({});
