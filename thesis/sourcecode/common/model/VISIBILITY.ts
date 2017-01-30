/**
 * Enumerator for the visibility flag of nodes and links
 */
export class VISIBILITY {
    toString() {
        return this.value;
    }

    static VISIBLE = new VISIBILITY("VISIBLE");
    static HIDDEN = new VISIBILITY("HIDDEN");
}
