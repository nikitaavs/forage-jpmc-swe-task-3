declare module '@jpmorganchase/perspective' {
    export interface Table {
        load(data: any[]): void;
        update(data: any[]): void;
    }

    export function worker(): { table: (schema: any) => Table };
}

declare module '@jpmorganchase/perspective-react' {
    import { ComponentType } from 'react';
    import { Table } from '@jpmorganchase/perspective';

    export interface PerspectiveViewerElement extends HTMLElement {
        load: (table: Table) => void;
    }

    export const PerspectiveViewer: ComponentType<any>;
}
