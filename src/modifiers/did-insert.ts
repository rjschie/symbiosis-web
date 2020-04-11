import { modifierCapabilities, setModifierManager } from '@glimmer/core';

export default setModifierManager(
  () => ({
    capabilities: modifierCapabilities('3.13'),
    createModifier(): void {
      //
    },
    installModifier(_: unknown, element: Element, { positional }): void {
      const [fn] = positional as [Function];
      fn(element);
    },
    updateModifier(): void {
      //
    },
    destroyModifier(): void {
      //
    },
  }),
  {}
);
