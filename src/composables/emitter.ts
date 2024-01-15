import mitt from "mitt";

import type { FormEvent } from "@/types/Event";

type Events = FormEvent;

const emitter = mitt<Events>();

export default emitter;