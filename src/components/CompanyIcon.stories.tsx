import React, { Fragment } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { CompanyIcon } from "./CompanyIcon";
import { icons } from "../icons";

const meta: Meta = {
  title: "Icons",
};
export default meta;

export const Grid: StoryObj<typeof GridLayout> = (args) => (
  <GridLayout {...args} />
);
Grid.args = {};

export const Individual: StoryObj<typeof CompanyIcon> = (args) => (
  <CompanyIcon {...args} />
);
Individual.args = {
  name: "airtable",
  className: "",
  style: {
    width: "100px",
    height: "100px",
  },
  variant: "dark",
};

const cellStyle = {
  fontSize: "0.8rem",
  borderBottom: "1px solid #ccc",
  padding: "8px",
  margin: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

function GridLayout() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(5, max-content)",
        alignItems: "stretch",
        justifyItems: "stretch",
        fontFamily: "sans-serif",
      }}
    >
      <span style={cellStyle}>Name</span>
      <span style={cellStyle}>Default</span>
      <span style={cellStyle}>Dark</span>
      <span style={cellStyle}>Light</span>
      <span style={cellStyle}>Small</span>

      {Object.keys(icons).map((iconName) => (
        <Fragment key={iconName}>
          <h3 style={{ ...cellStyle }}>{iconName}</h3>
          <div style={{ ...cellStyle, backgroundColor: "#def" }}>
            <CompanyIcon
              name={iconName}
              style={{
                display: "block",
                width: "32px",
                height: "32px",
                border: "1px solid #ccc",
              }}
            />
          </div>
          <div style={cellStyle}>
            <CompanyIcon
              name={iconName}
              variant="dark"
              style={{
                display: "block",
                width: "32px",
                height: "32px",
              }}
            />
          </div>
          <div style={{ ...cellStyle, backgroundColor: "#000" }}>
            <CompanyIcon
              name={iconName}
              variant="light"
              style={{
                display: "block",
                width: "32px",
                height: "32px",
              }}
            />
          </div>
          <div style={cellStyle}>
            <CompanyIcon
              name={iconName}
              variant="dark"
              style={{
                display: "block",
                width: "16px",
                height: "16px",
              }}
            />
          </div>
        </Fragment>
      ))}
    </div>
  );
}
