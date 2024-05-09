import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, TextInput } from "react-native";
import {
  PockemonDescriptionStyle as style,
  PockemonProfileStyle,
  PockemonAbltiesStyle,
} from "../../../styles/styles";

interface AboutProps {}

interface AboutComponent {
  GetAbout({ pockemon }: { pockemon: any }): React.ReactElement;
}

export  default class AboutPokemon implements AboutComponent {
  public GetAbout({ pockemon }: { pockemon: any }): React.ReactElement {
    const About = new AboutPokemon();
    return <About.About pockemon={pockemon} />;
  }

  private About({ pockemon }: { pockemon: any }): React.ReactElement {
    const Elements = new AboutPokemon();
    return (
      <View
        style={{
          marginTop: 22,
          height: "100%",
          marginHorizontal: 20,
        }}
      >
        <Elements.Description description={pockemon.description} />
        <Elements.Profile height={pockemon.height} weight={pockemon.weight} />
        <Elements.Abilities pockemon={pockemon} />
      </View>
    );
  }

  /**
   * this method is the description of the pokemon details
   *
   * @param description: {}[]
   * @returns ReactElement
   */
  private Description({
    description,
  }: {
    description: { flavor_text: string }[];
  }): React.ReactElement {
    return (
      <View style={style.container}>
        <Text style={style.title}>Description</Text>
        <Text style={style.Text}>
          {description[0].flavor_text +
            description[1].flavor_text +
            description[2].flavor_text}
        </Text>
        <Text style={style.Text}>
          {description[4].flavor_text +
            description[5].flavor_text +
            description[6].flavor_text}
        </Text>
      </View>
    );
  }
  /**
   * this method is the profile of the pokemon details
   * @param height: number
   * @param weight: number
   * @returns ReactElement
   */
  private Profile({
    height,
    weight,
  }: {
    height: number;
    weight: number;
  }): React.ReactElement {
    return (
      <View style={PockemonProfileStyle.container}>
        <Text style={PockemonProfileStyle.title}>Profile</Text>
        <View style={PockemonProfileStyle.bodycontainer}>
          <View>
            <Text style={PockemonProfileStyle.subTitle}>Height</Text>
            <Text style={PockemonProfileStyle.text2}>{height}</Text>
          </View>
          <View>
            <Text style={PockemonProfileStyle.subTitle}>Weight</Text>
            <Text style={PockemonProfileStyle.text2}>{weight}</Text>
          </View>
        </View>
      </View>
    );
  }
  /**
   * this method is the abilities of the pokemon details
   * @param pockemon : Object
   * @returns ReactElement
   */
  private Abilities({ pockemon }: { pockemon: any }): React.ReactElement {
    return (
      <View style={PockemonAbltiesStyle.container}>
        <Text style={PockemonAbltiesStyle.title}>Abilities</Text>
        {pockemon.abilities.map((item: any, index: number) => (
          <View style={PockemonAbltiesStyle.bodycontainer} key={index}>
            <Text style={PockemonAbltiesStyle.subTitle}>
              {item.ability.name}
            </Text>
            <Text style={{ textAlign: "center", fontSize: 20 }}>
              {pockemon.abilitiesDetails[index].effect}
            </Text>
          </View>
        ))}
      </View>
    );
  }

}
