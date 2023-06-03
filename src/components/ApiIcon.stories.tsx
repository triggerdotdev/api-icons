import React, { Fragment } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { ApiIcon } from "./ApiIcon";
import { icons } from "../apis";

const meta: Meta = {
  title: "ApiIcon",
};
export default meta;

export const Grid: StoryObj<typeof GridLayout> = (args) => (
  <GridLayout {...args} />
);
Grid.args = {};

export const Individual: StoryObj<typeof ApiIcon> = (args) => (
  <ApiIcon {...args} />
);
Individual.args = {
  name: "airtable",
  className: "",
  style: {
    width: "100px",
    height: "100px",
  },
};

function GridLayout() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "auto 1fr",
        alignItems: "stretch",
        justifyItems: "stretch",
      }}
    >
      {Object.keys(icons).map((iconName) => (
        <Fragment key={iconName}>
          <h4
            style={{
              margin: 0,
              fontFamily: "sans-serif",
              padding: "8px",
              borderRight: "1px solid #ccc",
              borderBottom: "1px solid #ccc",
            }}
          >
            {iconName}
          </h4>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
              paddingLeft: "8px",
              alignItems: "center",
              borderBottom: "1px solid #ccc",
            }}
          >
            <ApiIcon
              name={iconName}
              style={{
                display: "block",
                width: "32px",
                height: "32px",
                border: "1px solid #ccc",
              }}
            />
            <ApiIcon
              name={iconName}
              style={{
                display: "block",
                width: "32px",
                height: "32px",
              }}
            />
            <ApiIcon
              name={iconName}
              style={{
                display: "block",
                width: "32px",
                height: "32px",
                backgroundColor: "#000",
                padding: "8px",
              }}
            />
          </div>
        </Fragment>
      ))}
    </div>
  );
}
