import {ArmorTestCase} from './case';

export class ArmorTestCaseStaticMethodParamCount extends ArmorTestCase {
	constructor(parentId: string, id: string, label: string) {
		super(parentId, id, label);
	}

	public async execute(instance: any, methodName: string, expected: number): Promise<any> {
		it(this.label, () => {
			expect(instance[methodName]).not.toBeUndefined();
			expect(instance[methodName].length).toBe(expected);
		});
	}
}
