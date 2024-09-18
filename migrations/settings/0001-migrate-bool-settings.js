export default function migrate(settings) {
  // the default position is center
  let column_position = "center";

  const showFirst = settings.get("show_topic_author_column_first") === "true";
  const showLast = settings.get("show_topic_author_column_last") === "true";

  if (showFirst) {
    column_position = "left";
  } else if (showLast) {
    column_position = "right";
  }

  settings.set("column_position", column_position);

  settings.delete("show_topic_author_column_first");
  settings.delete("show_topic_author_column_last");

  return settings;
}
