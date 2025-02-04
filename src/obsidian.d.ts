import "obsidian";

declare module "obsidian" {
  export interface App {
    internalPlugins: InternalPlugins;
  }

  export interface InstalledPlugin {
    enabled: boolean;
    _loaded: boolean;
    instance: PluginInstance;
  }

  export interface InternalPlugins {
    plugins: Record<string, InstalledPlugin>;
    getPluginById(id: string): InstalledPlugin;
  }

  export interface PluginInstance {
    id: string;
    name: string;
    description: string;
    _loaded: boolean;
  }

  export interface WorkspacePluginInstance extends PluginInstance {
    deleteWorkspace(workspaceName: string): void;
    saveWorkspace(workspaceName: string): void;
    loadWorkspace(workspaceName: string): void;
    setActiveWorkspace(workspaceName: string): void;
    plugin: PluginInstance;
    activeWorkspace: string;
    saveData(): void;
    workspaces: { [x: string]: Workspaces }; // TODO: improve this typing
  }

  export interface Workspaces {
    [x: string]: Workspace; // TODO: improve this typing
  }
}
