interface Colors{
      id: number,
      name: string,
      color_code: string,
      hex_code: string,
      application_types: null,
      sublimination_only: number,
      active: number,
      order: number,
      update_history: {
            info: string,
            date_time: string,
            user_id: string,
      }[],
      master_color_id: number,
      brand: string,
      alias: string,
      color_code_alias: string
}

export default Colors