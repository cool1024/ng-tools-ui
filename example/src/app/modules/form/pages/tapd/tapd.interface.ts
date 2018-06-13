
export interface TapdTask {
    taskId: number;
    taskName: string;
    taskItems: TapdTaskItem[];
    isEditMode: boolean;
}
export interface TapdTaskItem {
    taskName: string;
    taskDescription?: string;
    taskEndTime?: string;
    taskCloseTime?: string;
    taskLeaderName?: string;
    taskFileNum?: number;
    taskMessageNum?: number;
}
