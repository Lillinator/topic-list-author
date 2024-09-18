import EmberObject from "@ember/object";
import { service } from "@ember/service";

export default class AuthorColumnContent extends EmberObject {
  @service site;

  get shouldShow() {
    return (
      (this.site.mobileView && this.setting === "center"
        ? "left"
        : this.setting) === this.position
    );
  }
}
