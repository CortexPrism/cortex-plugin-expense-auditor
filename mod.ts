// deno-lint-ignore-file require-await, no-unused-vars
import type { PluginContext, Tool, ToolResult } from 'cortex/plugins';
function ok(n: string, o: unknown, s: number): ToolResult {
  return {
    toolName: n,
    success: true,
    output: JSON.stringify(o, null, 2),
    durationMs: Date.now() - s,
  };
}

const expense_audit_reportTool: Tool = {
  definition: {
    name: 'expense_audit_report',
    description: 'Audit expense report against policy',
    params: [],
    capabilities: ['network:fetch'],
  },
  execute: async (args, ctx) => {
    const s = Date.now();
    try {
      ctx.logger.info('[expense-auditor] expense_audit_report executed');
      return ok('expense_audit_report', { status: 'completed', result: 'stub' }, s);
    } catch (e) {
      return {
        toolName: 'expense_audit_report',
        success: false,
        output: '',
        error: String(e),
        durationMs: Date.now() - s,
      };
    }
  },
};

const expense_list_violationsTool: Tool = {
  definition: {
    name: 'expense_list_violations',
    description: 'List policy violations',
    params: [],
    capabilities: ['network:fetch'],
  },
  execute: async (args, ctx) => {
    const s = Date.now();
    try {
      ctx.logger.info('[expense-auditor] expense_list_violations executed');
      return ok('expense_list_violations', { status: 'completed', result: 'stub' }, s);
    } catch (e) {
      return {
        toolName: 'expense_list_violations',
        success: false,
        output: '',
        error: String(e),
        durationMs: Date.now() - s,
      };
    }
  },
};

const expense_generate_reportTool: Tool = {
  definition: {
    name: 'expense_generate_report',
    description: 'Generate monthly spend analytics',
    params: [],
    capabilities: ['network:fetch'],
  },
  execute: async (args, ctx) => {
    const s = Date.now();
    try {
      ctx.logger.info('[expense-auditor] expense_generate_report executed');
      return ok('expense_generate_report', { status: 'completed', result: 'stub' }, s);
    } catch (e) {
      return {
        toolName: 'expense_generate_report',
        success: false,
        output: '',
        error: String(e),
        durationMs: Date.now() - s,
      };
    }
  },
};

const expense_approveTool: Tool = {
  definition: {
    name: 'expense_approve',
    description: 'Auto-approve compliant reports',
    params: [],
    capabilities: ['network:fetch'],
  },
  execute: async (args, ctx) => {
    const s = Date.now();
    try {
      ctx.logger.info('[expense-auditor] expense_approve executed');
      return ok('expense_approve', { status: 'completed', result: 'stub' }, s);
    } catch (e) {
      return {
        toolName: 'expense_approve',
        success: false,
        output: '',
        error: String(e),
        durationMs: Date.now() - s,
      };
    }
  },
};

export async function onLoad(ctx: PluginContext): Promise<void> {
  ctx.logger.info('[cortex-plugin-expense-auditor] Loaded');
}
export async function onUnload(ctx: PluginContext): Promise<void> {
  ctx.logger.info('[cortex-plugin-expense-auditor] Unloading...');
}
export const tools: Tool[] = [
  expense_audit_reportTool,
  expense_list_violationsTool,
  expense_generate_reportTool,
  expense_approveTool,
];
